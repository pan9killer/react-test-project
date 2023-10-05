import React, {useEffect, useState, useRef} from "react";
import { getApps, getAppOverview, getAppOverviewUsers } from "../service/service.ts";
import { IAppsResponse, IAppRow, IGetAppOverviewUsersResponce, IItem } from "../service/service.props.ts";
import './table.css'
import { TableItem } from "./table-item.tsx";
import { Pagination } from "./pagination.tsx";
import { ExpandableItem } from "./expanded-item.tsx";

const Table = () => {
  const [tableData, setTableData] = useState<IAppsResponse | null>(null);
  const [itemsLength, setItemsLength] = useState<number>(25);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const prevItemsLengthRef = useRef<number>(itemsLength);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [expandItem, setExpandItem] = useState<boolean>(false);
  const [expandedItemData, setExpandedItemData] = useState<IItem | null>(null);
  const [expandedItemUsersData, setExpandedItemUsersData] = useState<IGetAppOverviewUsersResponce | null>(null);


  const fetchApps = async () => {
    try {
      const data = await getApps({ pageNumber: pageNumber, pageSize: itemsLength });
      setTableData(data);
    } catch (error) {
      console.error("Failed to fetch apps:", error);
    }
  };

  // useEffect(() => {
  //   fetchApps(); 
  // }, []);

  // useEffect(() => {
  //   if (prevItemsLengthRef.current === itemsLength) return;
  //   fetchApps();
  //   prevItemsLengthRef.current = itemsLength;
  // }, [itemsLength]);

  useEffect(() => {
    fetchApps();
}, [pageNumber, itemsLength]);

  const sortHandler = (field: keyof IAppRow | 'appSourceFirstItem') => {
    const sortedTableData = [...(tableData?.appRows || [])].sort((a, b) => {
      let aValue, bValue;

      if(field === 'appSourceFirstItem'){
        aValue = a.appSources[0] || '';
        bValue = b.appSources[0] || '';
      } else {
        aValue = a[field];
        bValue = b[field];
      }

        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });

    setTableData(prevState => ({
        ...prevState,
        appRows: sortedTableData
    }));

    setSortDirection(prevDirection => (prevDirection === 'asc' ? 'desc' : 'asc'));
  };

  const handleItemClick = async (appId: string) => {
    try {
      const data = await Promise.all([getAppOverview({ appId }), getAppOverviewUsers({appId})]);
      setExpandedItemData(data[0]);
      setExpandedItemUsersData(data[1]);
      setExpandItem(true);
    } catch (error) {
      console.error("Failed to get app overview:", error);
    }
  };

  return (
    <div>{tableData && Array.isArray(tableData?.appRows) && tableData?.appRows?.length > 0 &&
      <>
        <h6>App inventory</h6> 
        <div className="table">

        <div className="table-item-sort">
          <span onClick={() => sortHandler('appName')}>Name</span>
          <span onClick={() => sortHandler('category')}>Category</span>
          <span onClick={() => sortHandler('appSourceFirstItem')}>Connector</span>
        </div>

        
        {tableData?.appRows.map((item: IAppRow) => (
          <TableItem item={item} onClick={() => handleItemClick(item.appId)} />
        ))}
        </div>

        <Pagination itemsLength={itemsLength} currentPage={pageNumber} setItemsLength={setItemsLength} setPageNumber={setPageNumber} totalCount={tableData?.totalCount || 0} />

        {expandItem && expandedItemData && expandedItemUsersData && 
        <ExpandableItem 
          item={expandedItemData?.appOverview} 
          setExpandItem={setExpandItem} 
          users={expandedItemUsersData} 
        />}
      </>}
    </div>
  )
};

export default Table;
import React  from "react";
import { IAppRow } from "../service/service.props";
import "./table.css";

interface Item {
  item: IAppRow;
  onClick: () => void;
}

export const TableItem = ({ item, onClick }: Item) => {
  return (
    <div className="table-item" onClick={onClick}>
      <span>{item.appName}</span>
      <span>{item.category}</span>
      <span>{item.appSources[0] || ""}</span>
    </div>
  );
};

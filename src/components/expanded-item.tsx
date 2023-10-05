import React from "react";
import './table.css';
import { IAppRow, IGetAppOverviewUsersResponce } from "../service/service.props";

interface ExpandItem {
  setExpandItem: (boolean:boolean) => void;
  item: IAppRow;
  users: IGetAppOverviewUsersResponce;
}

export const ExpandableItem = ({ setExpandItem, item, users }:ExpandItem) => {
  console.log(users)

  const closeItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setExpandItem(false);
  }
  return (
    <div className="overlay">
      <div className="close"><button className="close-btn" onClick={e=>closeItem(e)}>X</button></div>

      <div className="header-expand">
        <h6>App overview</h6>
        <span style={{textAlign: 'start'}}>{item.appName}</span>
      </div>

      <div className="expand-data">
        <span>App name: {item.appName}</span>
        <span>Category: {item.category}</span>
        <span>Users: {users.appUsers?.length}</span>
        <span>Connector: {item.appSources[0] || ""}</span>
        <span>Last classification: {item.appName || ""}</span>
      </div>

      {users.appUsers?.length > 0 &&
      <div className="users-data">
        <span>Users</span>
        {users.appUsers.map(item => (
        <span>{item}</span>
      ))}</div>}
      
    </div>
  )
};
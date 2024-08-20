import React from 'react'
import {Menu} from 'antd';
export default function Sidebar() {
  return (
    <>
    <div className=" bg-blue-900 text-white p-4 h-auto w-60">
      <span className="text-lg font-bold ml-7 mb-5 ">
        <span className=" text-blue-400">CRM</span> Agent
      </span>
      <Menu
        theme="dark"
        mode="inline"
        className="bg-blue-900 text-white"
      >
        <Menu.Item className="font-bold">
          MENU
        </Menu.Item>
        <Menu.Item>
          Analytics
        </Menu.Item>
        <Menu.Item>
          Customers
        </Menu.Item>
        <Menu.Item>
          Sales Report
        </Menu.Item>
        <Menu.Item>
          Calendar
        </Menu.Item>
        <Menu.Item>
          Tasks
        </Menu.Item>
        
        <Menu.Item className="font-bold">Members</Menu.Item>
          <Menu.Item>Chris</Menu.Item>
          <Menu.Item>Tasha</Menu.Item>
          <Menu.Item>Julius</Menu.Item>
          <Menu.Item>Janice</Menu.Item>
          <Menu.Item>Greg</Menu.Item>

      </Menu>
    </div>
    </>
  );
};
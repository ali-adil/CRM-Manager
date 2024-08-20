import React from 'react';
import {Table } from 'antd';





function TableComponent ({data,columns }) {
  return (
    <div className="p-8  bg-emerald-100 rounded shadow-md">
      <Table pagination={false} columns={columns} dataSource={data} />
    </div>
  );
};

export default TableComponent;

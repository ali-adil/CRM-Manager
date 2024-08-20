import React from 'react';
import {Tabs } from 'antd';

export default function MenuTab({tabItems}) {

  return (
    <div>
      <Tabs 
        className="ml-10" 
        defaultActiveKey="dashboard" 
        items={tabItems}
      >
      </Tabs>
    </div>
  );
}

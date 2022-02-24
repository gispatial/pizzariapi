import React from 'react';
import { Table, Badge, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons/lib';

const menu = (
  <Menu>
    <Menu.Item>NCD01 Standard Package</Menu.Item>
    <Menu.Item>NCD03 Complete Comprehensive</Menu.Item>
  </Menu>
);

const NestedTable = () => {
  const expandedRowRender = () => {
    const columns = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      {
        title: 'Status',
        key: 'state',
        render: () => (
          <span>
            <Badge status='success' />
            Finished
          </span>
        )
      },
      { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <span className='table-operation'>
            <Dropdown overlay={menu}>
              <a onClick={(e) => e.preventDefault()} href='https://test.com/'>
                More <DownOutlined />
              </a>
            </Dropdown>
          </span>
        )
      }
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'Non-Communicable Disease (NCD)',
        upgradeNum: 'Add-on'
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const columns = [
    { title: 'Screening ', dataIndex: 'name', key: 'name' },
    { title: 'Packages Plan', dataIndex: 'platform', key: 'platform' },
    { title: 'Basic NCD Screening', dataIndex: 'version', key: 'version' },
    { title: 'Non-Communicable Disease (NCD)', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    { title: 'Patient I.D', dataIndex: 'creator', key: 'creator' },
    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    {
      title: 'Purchase',
      key: 'operation',
      render: () => (
        <a onClick={(e) => e.preventDefault()} href='#'>
          Purchase
        </a>
      )
    }
  ];

  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      name: 'NCD01 Standard Package',
      platform: 'Non-Communicable Disease (NCD) ',
      version: 'HS03 Comprehensive Package',
      upgradeNum: 500,
      creator: 'Naem Binti Mahmod',
      createdAt: '2014-12-24 23:12:00'
    });
  }

  return (
    <Table
      pagination={false}
      className='components-table-demo-nested'
      columns={columns}
      expandedRowRender={expandedRowRender}
      dataSource={data}
    />
  );
};

export default NestedTable;

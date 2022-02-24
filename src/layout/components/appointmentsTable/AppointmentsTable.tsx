import React, { ReactNode } from 'react';

import { Avatar, Table } from 'antd';

import { ColumnProps } from 'antd/es/table';
import { IAppointment } from '../../../interfaces/patient';

const AppointmentImg = ({ img }) => {
  const isData = img.startsWith('data:image');
  const isWithPath = img.startsWith('http');

  if (isData || isWithPath) {
    return <Avatar size={40} src={img} />;
  }

  return <Avatar size={40} src={`${window.location.origin}/${img}`} />;
};

const columns: ColumnProps<IAppointment>[] = [
  {
    key: 'img',
    title: 'Photo',
    dataIndex: 'img',
    render: (img) => <AppointmentImg img={img} />
  },
  {
    key: 'name',
    dataIndex: 'name',
    title: 'Name',
    sorter: (a, b) => (a.name > b.name ? 1 : -1),
    render: (name) => <strong>{name}</strong>
  },
  {
    key: 'number',
    dataIndex: 'number',
    title: 'Account',
    render: (phone) => (
      <span className='d-flex align-baseline nowrap' style={{ color: '#336cfb' }}>
        <span className='icofont icofont-account mr-1' style={{ fontSize: 16 }} />
        {phone}
      </span>
    )
  },
  { key: 'doctor', title: 'IC No', dataIndex: 'doctor' },
  { key: 'condition', title: 'Supporting Documents', dataIndex: 'injury' },
  {}
];

type Props = {
  data: IAppointment[];
  actions?: (appointment: IAppointment) => ReactNode;
};

const AppointmentsTable = ({ data, actions }: Props) => {
  const actionColumn: ColumnProps<IAppointment> = {
    key: 'actions',
    title: 'Actions',
    render: actions
  };

  const displayedColumns = actions ? [...columns, actionColumn] : columns;

  return (
    <Table
      rowKey='number'
      dataSource={data}
      columns={displayedColumns}
      pagination={{ hideOnSinglePage: true }}
    />
  );
};

export default AppointmentsTable;

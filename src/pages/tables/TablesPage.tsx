import React from 'react';
import { Card } from 'antd';

import CollSpan from './CollSpan';
import TableSize from './TableSize';
import Selection from './Selection';
import Operations from './Operations';
import NestedTable from './NestedTable';
import FilterReset from './FilterReset';
import CustomOptions from './CustomOptions';
import FilterAndSorting from './FilterAndSorting';

import { IPageData } from '../../interfaces/page';
import { usePageData } from '../../hooks/usePage';

const pageData: IPageData = {
  title: 'Markeplace',
  fulFilled: true,
  breadcrumbs: [
    {
      title: 'Home',
      route: 'default-dashboard'
    },
    {
      title: 'UI Kit ',
      route: 'default-dashboard'
    },
    {
      title: 'Add Booking Packages'
    }
  ]
};

const TablesPage = () => {
  usePageData(pageData);

  return (
    <>
      <Card title='Add Booking Plan' className='mb-0'>
        <NestedTable />
      </Card>
    </>
  );
};

export default TablesPage;

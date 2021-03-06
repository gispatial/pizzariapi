import React from 'react';


import { usePageData, useFetchPageData } from '../../hooks/usePage';
import { IPageData } from '../../interfaces/page';

const pageData: IPageData = {
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
      title: 'Vector maps'
    }
  ]
};

const mapUrl = './data/world-vector.json';

const PageVectorMaps = () => {
  usePageData(pageData);
  const [world] = useFetchPageData(mapUrl);

  if (!world) return <></>;
  console.log(world);
  return (
    <>
    </>
  );
};

export default PageVectorMaps;

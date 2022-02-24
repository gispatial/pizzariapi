import React from 'react';

import GoogleMapReact from 'google-map-react';

import { usePageData } from '../../hooks/usePage';
import { IPageData } from '../../interfaces/page';
import { apiKey } from './apiKey';

const centerCoord = {
  lat: 3.16889,
  lng: 101.64876
};

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
      title: 'Google maps'
    }
  ]
};

const GoogleMapsPage = () => {
  usePageData(pageData);

  return (
    <div className='full-height-page'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={centerCoord}
        defaultZoom={15}
      />
    </div>
  );
};

export default GoogleMapsPage;

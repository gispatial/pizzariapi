import React from 'react';

import { Card } from 'antd';
import ReactEcharts from 'echarts-for-react';

import Logo from '../../../layout/components/logo/Logo';
import LogoSvg from '../../../assets/img/logo.svg';

import { chartOptions } from './chart-options';

import { OurTimeline } from './Timeline';
import { LastClients, LastPayments } from './Tables';
import { usePageData } from '../../../hooks/usePage';

import { IPageData } from '../../../interfaces/page';

const pageData: IPageData = {
  title: 'Events timeline',
  fulFilled: true,
  breadcrumbs: [
    {
      title: 'Apps',
      route: 'default-dashboard'
    },
    {
      title: 'Service pages',
      route: 'default-dashboard'
    },
    {
      title: 'Events timeline'
    }
  ]
};

const EventsTimelinePage = () => {
  usePageData(pageData);

  return (
    <>
      <Card
        className='custom-bg-color'
        style={{
          padding: '0 15px',
          backgroundImage:
            'linear-gradient(to right, rgb(243, 243, 244) 0%, rgb(225, 225, 226) 100%)',
          color: 'rgb(31, 32, 34)'
        }}
      >
        <div className='row'>
          <div className='col-12 col-md-6 mb-4 mb-md-0'>
            <Logo style={{ padding: 0 }} src={LogoSvg} />
            <h3>INTRODUCING MYHEALTHCARD™</h3>
            <p className='text-color-300'>
              The MYHEALTHCARD™ application allows people to undertake health screening through a booking system and have their test results (current and past) and other records uploaded and viewed on a dynamic dashboard with various health panels. This proactive platform allows them to be in charge and up-to-date with their state of health and at the same time, engage with their doctor to seek further consultations and manage their prescribed medication through the integration with the MYWAYDIABETESTM   application as part of this community-based health screening and clinical management platform.
            </p>
          </div>

          <div className='col-12 col-md-6 text-right'>
            <h4 className='color-accent mt-0 mb-1'>Myr 25038</h4>
            <p className='text-muted'>Income this week</p>
            <ReactEcharts option={chartOptions} className='chart-container container-h-100' />
          </div>
        </div>
      </Card>

      <div className='row'>
        <div className='col-12 col-md-4'>
          <Card
            style={{ padding: '5px 0' }}
            className='custom-bg-color bg-color-accent mb-md-0'
            title={
              <h3 className='mt-0 color-black' style={{ fontWeight: 400 }}>
                Introduction
              </h3>
            }
          >
            <h6 className='mt-0 mb-0'>Address</h6>
            <p className='color-white'>Unit A1-3A, Street Mall, One South, Jln Os, Taman Serdang Perdana, Sec 6, 43300 Seri Kembangan, Selangor, Malaysia.</p>
            <h6 className='mt-0 mb-0'>Email</h6>
            <p className='color-white'>info@myhealthcard.com.my</p>
            <h6 className='mt-0 mb-0'>24/7 Support</h6>
            <p className='color-white'>+6017-627 3839</p>
          </Card>

          <h4 className='section-title'>Last clients</h4>
          <LastClients />

          <h4 className='section-title'>Last payments</h4>
          <LastPayments />
        </div>

        <div className='col-12 col-md-8'>
          <Card title='Our Timeline' className='mb-0'>
            <OurTimeline />
          </Card>
        </div>
      </div>
    </>
  );
};

export default EventsTimelinePage;

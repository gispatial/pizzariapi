import React from 'react';

import { Card } from 'antd';

import ReactEcharts from 'echarts-for-react';

import AppointmentsTable from '../../../layout/components/appointmentsTable/AppointmentsTable';
import hospitalOptions from './charts/hospital-options';

import { incomeInWeek, incomeInMonth } from './charts/income-options';

import {
  patientsGenderOptions,
  departmentsOptions,
  patientsAgeOptions
} from './charts/patients-options';

import { useFetchPageData, usePageData } from '../../../hooks/usePage';

import { IAppointment } from '../../../interfaces/patient';
import { IPageData } from '../../../interfaces/page';

const pageData: IPageData = {
  fulFilled: false,
  breadcrumbs: [
    {
      title: 'Dashboards',
      route: 'default-dashboard'
    },
    {
      title: 'Default'
    }
  ]
};

const DashboardPage = () => {
  const [appointments] = useFetchPageData<IAppointment[]>('./data/last-appointments.json', []);
  usePageData(pageData);

  return (
    <>

      <div className='row'>
        <div className='col-12 col-md-6 col-xl-3'>
          <Card style={{ background: 'rgba(251, 251, 251)' }} className='animated with-shadow'>
            <div className='row'>
              <div className='col-5'>
                <span
                  className='icofont icofont-users'
                  style={{ fontSize: 48, color: 'rgba(51, 108, 251, 0.5)' }}
                />
              </div>

              <div className='col-7'>
                <h6 className='mt-0 mb-1'>My Account</h6>
                <div className='count' style={{ fontSize: 20, color: '#336cfb', lineHeight: 1.4 }}>

                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className='col-12 col-md-6 col-xl-3'>
          <Card style={{ background: 'rgba(251, 251, 251)' }} className='animated with-shadow'>
            <div className='row'>
              <div className='col-5'>
                <span
                  className='icofont icofont-ebook'
                  style={{ fontSize: 48, color: 'rgba(51, 108, 251, 0.5)' }}
                />
              </div>

              <div className='col-7'>
                <h6 className='mt-0 mb-1'>My Bookings</h6>
                <div className='count' style={{ fontSize: 20, color: '#336cfb', lineHeight: 1.4 }}>

                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className='col-12 col-md-6 col-xl-3'>
          <Card style={{ background: 'rgba(251, 251, 251)' }} className='animated with-shadow'>
            <div className='row'>
              <div className='col-5'>
                <span
                  className='icofont icofont-blood'
                  style={{ fontSize: 48, color: 'rgba(51, 108, 251, 0.5)' }}
                />
              </div>

              <div className='col-7'>
                <h6 className='mt-0 mb-1'>Details of Screening Test</h6>
                <div className='count' style={{ fontSize: 20, color: '#336cfb', lineHeight: 1.4 }}>

                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className='col-12 col-md-6 col-xl-3'>
          <Card style={{ background: 'rgba(251, 251, 251)' }} className='animated with-shadow'>
            <div className='row'>
              <div className='col-5'>
                <span
                  className='icofont icofont-qr-code'
                  style={{ fontSize: 48, color: 'rgba(51, 108, 251, 0.5)' }}
                />
              </div>

              <div className='col-7'>
                <h6 className='mt-0 mb-1'>My QR Code</h6>
                <div className='count' style={{ fontSize: 20, color: '#336cfb', lineHeight: 1.4 }}>

                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

    <Card title='SUMMARY OF TEST RESULTS'>
      <ReactEcharts className='chart-container container-h-400' option={hospitalOptions} />
    </Card>

    <div className='row'>
      <div className='col-sm-12 col-md-6'>
        <Card>
          <h4 className='mt-0 mb-1'>COVID-19 SARS-CoV-2 Cases</h4>
          <p className='mb-0' style={{ color: '#9d9d9d' }}>
          </p>

          <ReactEcharts className='chart-container' option={incomeInMonth} />
        </Card>
      </div>

      <div className='col-sm-12 col-md-6'>
        <Card>
          <h4 className='mt-0 mb-1'>Body Mass Index</h4>
          <p className='mb-0' style={{ color: '#9d9d9d' }}>
          </p>

          <ReactEcharts className='chart-container' option={incomeInWeek} />
        </Card>
      </div>
    </div>

    <div className='row'>
      <div className='col-12 col-md-4'>
        <Card title={'HIV I Ag/Ab'}>
          <ReactEcharts className='chart-container container-h-300' option={patientsAgeOptions} />
        </Card>
      </div>

      <div className='col-12 col-md-4'>
        <Card title={'Blood Pressure: Diastolic(mmHg)'}>
          <ReactEcharts
            className='chart-container container-h-300'
            option={patientsGenderOptions}
          />
        </Card>
      </div>

      <div className='col-12 col-md-4'>
        <Card title={' Blood Pressure: Systolic(mmHg)'}>
          <ReactEcharts className='chart-container container-h-300' option={departmentsOptions} />
        </Card>
      </div>
    </div>


    </>
  );
};

export default DashboardPage;

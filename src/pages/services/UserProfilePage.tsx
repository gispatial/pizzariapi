import React from 'react';
import { IPageData } from '../../interfaces/page';
import { usePageData } from '../../hooks/usePage';
import { Avatar, Button, Card, Rate, Tag, Timeline } from 'antd';

const pageData: IPageData = {
  title: 'User profile',
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
      title: 'User profile'
    }
  ]
};

const UserPreview = () => {
  const userCover = `${window.origin}/content/user-profile.jpg`;
  const userAvatar = `${window.origin}/content/user-400-1.jpg`;

  return (
    <Card
      cover={<img src={userCover} alt='user-cover' />}
      className='personal-info-card with-shadow'
    >
      <div
        className='d-flex align-items-center justify-content-between'
        style={{ marginTop: '-50px' }}
      >
        <Avatar src={userAvatar} size={100} />

        <Button
          style={{
            backgroundColor: '#e91e63',
            borderRadius: 500,
            color: '#fff',
            border: 'none'
          }}
        >
          Subscribe
        </Button>
      </div>

      <div className='d-flex align-items-center justify-content-between'>
        <h5 className='mb-0 mt-0 mr-1'>Rizaluddin Bin Mohd Salleh</h5>

        <Rate value={4} />
      </div>

      <p style={{ color: '#8f8f90' }}>ezabidin@gmail.com</p>

      <p>
      This QR code contains your screening appointment details. Please scan the QR code at the clinic which you have make appointment with for registration upon your arrival.
      </p>
    </Card>
  );
};

const Socials = () => {
  return (
    <Card className='with-shadow' title='SP01 - Individual Basic Starter (1 Adult)'>
      <div className='row align-items-center mb-3'>
      </div>
    </Card>
  );
};

const ContactInfo = () => {
  return (
    <Card title='Contact information' className='mb-md-0 with-shadow'>
      <div className='row align-items-center mb-3'>
        <div className='col col-auto'>
          <span className='icofont-ui-touch-phone' style={{ fontSize: 30, color: '#8f8f90' }} />
        </div>
        <div className='col'>
          <div>Mobile</div>
          +60193097197
        </div>
      </div>

      <div className='row align-items-center mb-3'>
        <div className='col col-auto'>
          <span className='icofont-company' style={{ fontSize: 30, color: '#8f8f90' }} />
        </div>
        <div className='col'>
          <div>Biodata</div>
          Note: If you need to change any particular in this profile, please contact our Admin through MY INBOX message
        </div>
      </div>

      <div className='row align-items-center mb-3'>
        <div className='col col-auto'>
          <span className='icofont-location-pin' style={{ fontSize: 30, color: '#8f8f90' }} />
        </div>
        <div className='col'>
          <div>Current Address</div>
          No 2 Jalan 3/23, Kajang, 43650, Hulu Langat, Selangor
        </div>
      </div>
    </Card>
  );
};

const Experience = () => {
  return (
    <Card title='Registration status : APPROVED' className='with-shadow'>
    REG. NO. 021/SP01/67 CENTER
    MONT KIARA
    DATE REGISTERED
    12 Sep 2021
    DATE EXPIRED
    11 Sep 2022
    PATIENT(S)
    1 x ADULT
    </Card>
  );
};

const Education = () => {
  return (
    <Card title='Contact no: +60193097197' className='with-shadow'>
    </Card>
  );
};

const Skills = () => {
  const skills = [
    'HTML',
    'PHP',
    'CSS',
    'SCSS',
    'ANGUlAR',
    'REACT',
    'VUE.JS',
    'JAVASCRIPT',
    'TYPESCRIPT'
  ];

  return (
    <Card title='Details of Screening Test' className='with-shadow mb-0'>
      <div>
          One (1) standard tests (all panels) for each staff (adult)
      </div>
    </Card>
  );
};
const UserProfilePage = () => {
  usePageData(pageData);

  return (
    <div className='row'>
      <div className='col-md-6 col-sm-12'>
        <UserPreview />
        <Socials />
        <ContactInfo />
      </div>

      <div className='col-md-6 col-sm-12'>
        <Experience />
        <Education />
      </div>
    </div>
  );
};

export default UserProfilePage;

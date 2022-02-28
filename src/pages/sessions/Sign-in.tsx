import React from 'react';

import { Button, Form, Input, Switch } from 'antd';
import { LoginOutlined } from '@ant-design/icons/lib';

import PublicLayout from '../../layout/public/Public';
import { Link } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';
import { navigateHome } from '../../utils/naviagate-home';

const { Item } = Form;

const SignIn = () => {
  const [form] = useForm();

  const login = () => {
    form
      .validateFields()
      .then(() => navigateHome())
      .catch(() => null);
  };

  return (
    <PublicLayout bgImg={`${window.origin}/content/login-page.jpg`}>
      <h4 className='mt-0 mb-1'>WELCOME</h4>

      <p className='text-color-200'>Sign in to continue</p>

      <Form form={form} layout='vertical' className='mb-4'>
        <Item name='login' rules={[{ required: true, message: <></> }]}>
          <Input placeholder='Enter your Username' />
        </Item>
        <Item name='password' rules={[{ required: true, message: <></> }]}>
          <Input placeholder='Enter your Password' type='password' />
        </Item>

        <div className='d-flex align-items-center mb-4'>
          <Switch defaultChecked /> <span className='ml-2'>Remember me</span>
        </div>

        <Button
          block={false}
          type='primary'
          onClick={login}
          htmlType='submit'
          icon={<LoginOutlined style={{ fontSize: '1.3rem' }} />}
        >
          Log in
        </Button>
      </Form>
      <br />
      <p className='mb-1'>
        <Link to='../page-505'>Forgot Your Password?</Link>
      </p>

      <p>
        You will need to have a MyHealthcard™ account to access this  app. <Link to='sign-up'>Register!</Link> to create a new account.
      </p>
      <p>Our Terms & Conditions.</p>
      <div><a href='https://staging.myhealthcard.my/myhc/v1/docs/terms-and-conditions.pdf' target='_blank'>Product & Service T&C</a></div>
      <div><a href='https://staging.myhealthcard.my/myhc/v1/docs/terms-and-conditions.pdf' target='_blank'>MyHealthcard™ Application T&C</a></div>
      <div>BMZ TECHNOLOGIES SDN BHD (1367481-W). Copyright 2021. All rights reserved.</div>
    </PublicLayout>
  );
};

export default SignIn;

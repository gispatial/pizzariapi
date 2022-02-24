import React, { ChangeEvent, useState } from 'react';

import { useFormik } from 'formik';
import { Button, Divider, Form, Input, Select } from 'antd';

import ImageLoader from '../../layout/components/patients/ImageLoader';

import { usePageData } from '../../hooks/usePage';
import { useGetUser } from '../../hooks/useGetUser';

import { IPageData } from '../../interfaces/page';
import { IPatient } from '../../interfaces/patient';

const pageData: IPageData = {
  title: 'You can change your main account settings here.',
  fulFilled: true,
  breadcrumbs: [
    {
      title: 'Apps',
      route: 'default-dashboard'
    },
    {
      title: 'Service Pages ',
      route: 'default-dashboard'
    },
    {
      title: 'Edit Account'
    }
  ]
};

const FormItem = Form.Item;
const Option = Select.Option;

const UserAvatar = ({ src, className = null }) => {
  return (
    <div className={`avatar-wrapper ${className}`}>
      <ImageLoader src={src} size={100} />
    </div>
  );
};

const AccountForm = ({ user }) => {
  const [submitted, setSubmitted] = useState({ ...user });
  const { values, setValues, handleSubmit } = useFormik<IPatient>({
    onSubmit: (values) => setSubmitted(values),
    initialValues: { ...user }
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name) => (value) => {
    setValues({ ...values, [name]: value });
  };

  const hasChanged = Object.keys(values).some((key) => values[key] !== submitted[key]);

  return (
    <Form layout='vertical'>
      <FormItem label='Name:'>
        <Input
          name='name'
          onChange={handleChange}
          placeholder='First Name'
          defaultValue={values.name}
        />
      </FormItem>

      <FormItem label='NRIC:'>
        <Input
          name='lastName'
          onChange={handleChange}
          defaultValue={values.lastName}
          placeholder='Last Name'
        />
      </FormItem>

      <FormItem label='Age:'>
        <Input
          type='number'
          name='age'
          onChange={handleChange}
          defaultValue={values.age}
          placeholder='Age'
        />
      </FormItem>

      <FormItem label='Name / IC No'>
        <Input
          type='number'
          name='number'
          onChange={handleChange}
          defaultValue={values.number}
          placeholder='Phone number'
        />
      </FormItem>

      <FormItem label='Status'>
        <Select
          defaultValue={values.status}
          placeholder='Status'
          onChange={handleSelectChange('status')}
        >
          <Option value='approved'>Approved</Option>
          <Option value='pending'>Pending</Option>
        </Select>
      </FormItem>

      <div className='elem-list justify-content-between'>
        <Button disabled={!hasChanged} className='bg-color-success' onClick={() => handleSubmit()}>
          <span className='text-color-500'>Save changes</span>
        </Button>

        <Button ghost danger className='ml-auto'>
          Delete account
        </Button>
      </div>
    </Form>
  );
};

const PasswordForm = () => {
  return (
    <Form layout='vertical'>
      <FormItem label='CHANGE PASSWORD'>
        <Input.Password placeholder='Enter Current Password' />
      </FormItem>

      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <FormItem
            name='password'
            label='NEW PASSWORD'
            rules={[{ required: true, message: 'Please enter new password' }]}
          >
            <Input.Password placeholder='Enter new password…' />
          </FormItem>
        </div>

        <div className='col-md-6 col-sm-12'>
          <FormItem
            name='confirmPassword'
            label='NEW PASSWORD (RETYPE)'
            rules={[
              {
                required: true,
                message: 'Please confirm your password!'
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('The two passwords that you entered do not match!');
                }
              })
            ]}
          >
            <Input.Password placeholder='Enter new password (retype)' />
          </FormItem>
        </div>
      </div>

      <Button type='primary'>Change password</Button>
    </Form>
  );
};

const EditAccountPage = () => {
  const user = useGetUser();
  usePageData(pageData);
  return (
    <div className='stack' style={{ maxWidth: 690, margin: '0 auto' }}>
      <UserAvatar className='mt-0' src={user.img} />
      <AccountForm user={user} />

      <Divider />

      <PasswordForm />
    </div>
  );
};

export default EditAccountPage;

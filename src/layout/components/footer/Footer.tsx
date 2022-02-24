import React from 'react';

import Breadcrumbs from './Breadcrumbs';
import classNames from '../../../utils/class-names';
import { IBreadcrumb } from '../../../interfaces/page';
import FooterLoader from './FooterLoader';

import './Footer.scss';

type Props = {
  loaded?: boolean;
  boxed: boolean;
  layout: string;
  breadcrumbs: IBreadcrumb[];
  openModal: () => void;
};

const Footer = ({
  boxed,
  loaded = false,
  layout,
  breadcrumbs,
  openModal
}: Props) => {
  let footerClasses = classNames({
    loaded,
    boxed
  });

  return (
    <div className={`footer ${footerClasses}`}>
      <div className='footer-wrap'>
        <div className='row align-items-center' style={{ height: '100%' }}>
          <div className='col-12 col-md-6 d-none d-md-block'>
            <Breadcrumbs layout={layout} breadcrumbs={breadcrumbs} />
          </div>

          <div className='col-12 col-md-6'>
            <div className='d-flex'>
              <span>Welcome to MyHealthcard™ Application. MAU Dashboard.</span>
            </div>
          </div>
        </div>

        <FooterLoader />
      </div>
    </div>
  );
};

export default Footer;

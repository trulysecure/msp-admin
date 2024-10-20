import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexDuplicate1SectionMenus2 from '../components/menus/IndexDuplicate1SectionMenus2';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function IndexDuplicate1() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexDuplicate1SectionMenus2 />
    </React.Fragment>
  );
}


import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionMenus2 from '../components/menus/IndexSectionMenus2';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionMenus2 />
    </React.Fragment>
  );
}


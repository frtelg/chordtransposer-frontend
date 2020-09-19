import React from 'react';
import Layout from './containers/Layout/Layout';
import Banner from './containers/Banner/Banner';
import Transposer from "./containers/Transposer/Transposer";

const app = props => {
  return (
    <Layout>
        <Banner />
        <Transposer />
    </Layout>
  );
}

export default app;

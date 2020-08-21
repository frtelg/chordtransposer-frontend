import React from 'react';
import Layout from './containers/Layout/Layout';
import Transposer from "./containers/Transposer/Transposer";

const app = props => {
  return (
    <Layout>
      <Transposer />
    </Layout>
  );
}

export default app;

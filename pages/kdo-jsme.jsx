/* eslint-disable global-require */
import React from 'react';

import { Layout, Markdown } from '../components';

const Page = ({ text }) => (
  <Layout>
    <Markdown text={text} />
  </Layout>
);

Page.getInitialProps = async () => {
  const data = await require('../public/texts/kdo-jsme.md');
  return {
    text: data.default,
  };
};

export default Page;

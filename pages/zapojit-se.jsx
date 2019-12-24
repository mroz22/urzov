/* eslint-disable global-require */
import React from 'react';

import { Layout, Markdown, Subscribe } from '../components';

const Page = ({ text }) => (
  <Layout>
    <Markdown text={text} />
    <Subscribe />
  </Layout>
);

Page.getInitialProps = async () => {
  const data = await require('../public/texts/zapojit-se.md');
  return {
    text: data.default,
  };
};

export default Page;

/* eslint-disable global-require */

import React from 'react';

import {
  Layout, Markdown,
} from '../components';


const Index = ({ text }) => (
  <Layout>
    <Markdown text={text} />
  </Layout>
);

Index.getInitialProps = async () => {
  const data = await require('../public/texts/index.md');
  return {
    text: data.default,
  };
};

export default Index;

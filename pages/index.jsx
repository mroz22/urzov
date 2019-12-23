/* eslint-disable global-require */

import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { Subscribe } from '../components';

const BORDER_THICKNESS = 20;

const Layout = styled.div`
    background-color: black;
    border: ${BORDER_THICKNESS}px dashed yellow;
    min-height: calc(100vh - 2 * ${BORDER_THICKNESS}px);
    text-align: center;
`;

const Text = styled.div`
  text-align: justify;
  margin: 0 20px;
`;

const Index = ({ text }) => (
  <Layout>
    <Text>
      <ReactMarkdown source={text} />
    </Text>
    <h2>Mailing list</h2>
    <Subscribe />
    <style global jsx>
      {`
        @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

        body {
          font-family: 'Roboto', sans-serif;
          margin: 0;
          height: 100%;
          color: white;
        }

        a {
          color: yellow;
        }

        html {
          height: 100%;
        }
      `}
    </style>
  </Layout>
);

Index.getInitialProps = async function () {
  const data = await require('../public/texts/index.md');
  return {
    text: data.default,
  };
};


export default Index;

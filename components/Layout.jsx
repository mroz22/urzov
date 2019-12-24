import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';

const BORDER_THICKNESS = 20;

const Wrapper = styled.div`
    background-color: black;
    border: ${BORDER_THICKNESS}px dashed yellow;
    min-height: calc(100vh - 2 * ${BORDER_THICKNESS}px);
    text-align: center;
`;

const Content = styled.div``;

const Layout = ({ children }) => (
  <Wrapper>
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
    <Menu />
    <Content>
      { children}
    </Content>
  </Wrapper>
);
export default Layout;

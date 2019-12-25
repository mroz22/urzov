import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';
import Svg from './Svg';

const BORDER_THICKNESS = 20;

const Wrapper = styled.div`
    background-color: black;
    /* border: ${BORDER_THICKNESS}px dashed yellow; */
    border-left: ${BORDER_THICKNESS}px dashed yellow;
    /* border-right: ${BORDER_THICKNESS}px dashed yellow; */

    min-height: calc(100vh);
    text-align: center;
    padding: 0 6%;
    max-width: 100vw;
    overflow-x:hidden;
`;

const Houses = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px 0;

`;

const Content = styled.div``;

const Layout = ({ children }) => (
  <Wrapper>
    <style global jsx>
      {`
        @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

        html {
          height: 100%;
        }

        body {
          font-family: 'Roboto', sans-serif;
          margin: 0;
          height: 100%;
          color: white;
        }

        h1 {
            font-size: 1.4em;
        }

        a {
          color: yellow;
        }
        
        ol {
          padding-inline-start: 25px;
        }

        ul {
          padding-inline-start: 25px;
        }


      `}
    </style>

    <Houses>
      <Svg src="house-2" size="80" />
      <Svg src="house" size="80" />
      <Svg src="house-2" size="80" />
    </Houses>

    <Menu />
    <Content>
      { children}
    </Content>
  </Wrapper>
);
export default Layout;

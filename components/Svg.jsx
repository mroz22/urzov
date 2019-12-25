import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: '30px';
`;

//  see https://codepen.io/sosuke/pen/Pjoqqp

const Svg = ({ src, size }) => (

  <Wrapper>
    <img
      alt="icon"
      style={{
        filter: 'invert(88%) sepia(95%) saturate(5480%) hue-rotate(359deg) brightness(108%) contrast(104%)',
      }}
      src={`./svg/${src}.svg`}
      width={`${size}px`}
    />
  </Wrapper>
);

export default Svg;

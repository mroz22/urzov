import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const Text = styled.div`
  text-align: left;
  margin: 0 20px;
`;

export default ({ text }) => <Text><ReactMarkdown source={text} /></Text>;

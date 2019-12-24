import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const Text = styled.div`
  text-align: justify;
`;

export default ({ text }) => <Text><ReactMarkdown source={text} /></Text>;

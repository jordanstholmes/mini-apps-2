import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

import CoinDesk from './components/coinDesk';
import chart from './components/chart';

const Wrapper = styled.h1`
  color: red;
`;

const Test = () => <Wrapper>Hello from React!</Wrapper>;

ReactDom.render(<CoinDesk />, document.getElementById('app'));

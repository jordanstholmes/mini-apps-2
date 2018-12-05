/* eslint-env browser */
import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

import Search from './components/search';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`;

const App = () => (
  <Wrapper>
    <h1>this is from React</h1>
    <Search />
  </Wrapper>
);

ReactDom.render(<App />, document.getElementById('app'));

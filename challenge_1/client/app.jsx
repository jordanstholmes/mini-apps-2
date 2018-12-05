/* eslint-env browser */
import React from 'react';
import ReactDom from 'react-dom';

const App = () => <h1>this is from React</h1>;

ReactDom.render(<App />, document.getElementById('app'));

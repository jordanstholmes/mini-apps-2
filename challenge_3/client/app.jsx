/* eslint-env browser */
import React from 'react';
import ReactDom from 'react-dom';

const App = ({ name }) => <h1 className={name}>Hello from React!</h1>;

// ReactDom.render(<App />, document.getElementById('app'));

export default App;

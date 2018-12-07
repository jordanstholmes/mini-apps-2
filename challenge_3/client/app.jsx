/* eslint-env browser */
import React from 'react';
import ReactDom from 'react-dom';
import FrameShots from './components/frameShots';

const App = ({ name }) => <h1 className={name}>Hello from React!</h1>;

ReactDom.render(<FrameShots first={5} second={0} />, document.getElementById('app'));

export default App;

import React from 'react';
import ReactDOM from 'react-dom';

const title = "some react app";

import App from './App'

ReactDOM.render(
  <App title={ title }/>,
  document.getElementById('app')
);

module.hot.accept();
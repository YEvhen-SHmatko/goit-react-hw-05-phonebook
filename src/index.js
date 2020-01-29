import React from 'react';
import ReactDOM from 'react-dom';
import PNotifyBrightTheme from 'pnotify/dist/PNotifyBrightTheme.css';
import App from './components/App/App';

ReactDOM.render(
  <App className={PNotifyBrightTheme} />,
  document.getElementById('root'),
);

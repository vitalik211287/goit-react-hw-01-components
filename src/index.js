import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.jsx';
import { ThemeProvider } from 'styled-components';
import { getRandomHexColor } from 'components/Statistics/Statistics.jsx';

// const theme = {
//     backgrounColor: 'red',
// };

const root = document.querySelector('#root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

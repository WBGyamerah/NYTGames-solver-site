import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/fonts/fonts.css'
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom'
import theme from './theme/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
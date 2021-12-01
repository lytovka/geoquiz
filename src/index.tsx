import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/system';
import { customTheme } from 'theme/theme';
import { QuizConfigProvider } from 'contexts/QuizConfiguration';
import { DOMAIN, CLIENT_ID } from 'constants/authentication';
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <Auth0Provider
        domain={DOMAIN}
        clientId={CLIENT_ID}
        redirectUri={window.location.origin}>
        <QuizConfigProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </QuizConfigProvider>
      </Auth0Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

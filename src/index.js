import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import { CookiesProvider } from 'react-cookie';

function Main() {

  return (
    <CookiesProvider>
      <App />;
    </CookiesProvider>
  )

}
const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);

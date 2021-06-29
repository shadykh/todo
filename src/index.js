import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SettingsContext from './components/context/settings/context.js'

function Main() {
  return (
    <SettingsContext>
    <App />
  </SettingsContext>
  )

}

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Main />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root'),
);

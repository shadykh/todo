import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function Main() {
  console.log('hi');
  return (
      <App />
  )

}
console.log('hi');
//const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Main />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root'),
);

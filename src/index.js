import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
// {} podria exportar cosas de un solo archivo
import App from './App';
//import reportWebVitals from './reportWebVitals';++

//////////////////////Creamos un elemento root 
const rootElement = ReactDOM.createRoot(document.getElementById('root'));

//metodo render: espera hijos/ nuestra app
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import './styles.css';
import App from './App.jsx';

function _App() {
  return (
    <div className="container">
      <App />
    </div>
  );
};


ReactDOM.render(  <StrictMode>
<_App />  </StrictMode>, document.getElementById('root'));

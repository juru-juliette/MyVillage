import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Components/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    {/* <App /> */}
    <AppRoutes/>
   </BrowserRouter>
  </React.StrictMode>

);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';

// import App from './App';

// ReactDOM.render (<App/>, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Admin from './components/Admin'
import Staff from './components/Staff'

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
      <Router>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/Admin' element={<Admin/>}/>
          <Route path='/Staff' element={<Staff/>}/>
        </Routes>
      </Router>,

  document.getElementById('root')
);


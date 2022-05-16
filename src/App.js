import React from 'react';
import Header from './components/header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sidebar from '../src/components/sidebar/Sidebar';

import Table from './pages/table/Table';
import Update from './pages/Update/UpdateStudent';
import Signin from './pages/Signin/Signin';


import Sidebarstd from '../src/components/Sidebarstd/Sidebarstd';
import GetEEV from './pages/GetEEV/GetEEV';
import AboutUS from './pages/AboutUS/AboutUS';
import ContactUS from './pages/Contact/ContactUS';
import Homestd from '../src/pages/Homestd/Homestd';
import SignUP from './pages/signup/SignUP';


function App() {
  return (
    
     <Router>
       <Route exact path='/acceuillefeo'><Header/><Sidebar/></Route>
       <Route exact path='/header'><Header/></Route>
       <Route exact path='/sidebarstd'><Sidebarstd/><Header/></Route>
       
       
       <Route exact path='/Liste'><Table/></Route>
       <Route exact path='/update'><Update/></Route>
       <Route exact path='/signin'><Signin/></Route>
       
       
       <Route exact path='/events'><GetEEV/></Route>
       <Route exact path='/about'><AboutUS/></Route>
       <Route exact path='/contact'><ContactUS/></Route>
       <Route exact path='/homestd'><Homestd/></Route>
       <Route exact path='/signup'><SignUP/></Route>
       
       </Router> 
    
  );
}

export default App;

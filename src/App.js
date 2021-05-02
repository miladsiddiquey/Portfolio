import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import ContactOne from './Components/ContactOne/ContactOne';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path = '/test'>
          <ContactOne/>
        </Route>
        <Route path = '/contact'>
          <Contact/>
        </Route>
      <Route path='/'>
        <Home/>
      </Route>
      </Switch>
    </Router>
  );
};

export default App;
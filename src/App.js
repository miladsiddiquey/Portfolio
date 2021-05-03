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
import AllProject from './Components/AllProject/AllProject';
import AllBlogs from './Components/AllBlogs/AllBlogs';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path ='/allProjects'>
          <AllProject/>
        </Route>
        <Route path = '/allBlogs'>
          <AllBlogs/>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
      <Route exact path='/'>
        <Home/>
      </Route>
      </Switch>
    </Router>
  );
};

export default App;
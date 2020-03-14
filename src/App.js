import React from 'react';
import './App.css';
import Home from './components/home';

import {BrowserRouter,Switch, Redirect, Route} from 'react-router-dom';
import JobDetail from './components/JobDetail';

function App() {
  return (    
    <BrowserRouter>
      <Switch>
        <Route path='/home' exact component={Home}></Route>
        <Route path='/job-detail' exact component={JobDetail}></Route>
        <Redirect to='/home'></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

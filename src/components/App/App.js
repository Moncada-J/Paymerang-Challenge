import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from '../NavBar/NavBar';
import StatementPage from '../../pages/StatementPage';
import Sidebar from '../../components/Sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
       <h1 className="title">Unleash the Power of 
      <br /> Electronic Payments</h1> 
      <Switch>
        <Route exact path="/statements">
          <StatementPage />
        </Route>
        <Redirect to="/statements" /> 
      </Switch>
    </div>
  )
}

export default App;

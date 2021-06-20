import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from '../NavBar/NavBar';
import StatementPage from '../../pages/StatementPage';
import './App.css';

function App() {
  return (
    <main className="App">
      <Navbar />
      <h1 className="title">Unleash the Power of 
      <br /> Electronic Payments</h1>
      <hr />
      <Switch>
        <Route exact path="/statements">
          <StatementPage />
        </Route>
        <Redirect to="/statements" />
      </Switch>
    </main>
  )
}

export default App;

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import StatementPage from '../../pages/StatementPage';
import './App.css';

function App() {
  return (
    <main className="App">
      <Navbar />
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

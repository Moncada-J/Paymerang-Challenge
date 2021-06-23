import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import StatementPage from '../pages/StatementPage';
import Sidebar from '../components/Sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Sidebar />
      <h1 className="title"> » Statement Library</h1>
      <Switch>
        <Route exact path="/statements">
          <StatementPage />
        </Route>
        <Redirect to="/statements" />
      </Switch>
    </div>
  );
}

export default App;

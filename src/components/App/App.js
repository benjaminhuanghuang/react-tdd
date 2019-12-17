import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import './App.css';
import Calculator from '../Calculator/Calculator';

import UserList from '../user-list/user-list';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter hashType="noslash">
        <header>
          <ul>
            <li><NavLink to="/calculator" exact activeClassName="active">Calculator</NavLink></li>
            <li><NavLink to="/userlist" exact activeClassName="active">UserList</NavLink></li>
          </ul>
        </header>
        <Switch>
          <Route path="/calculator" component={Calculator} />
          <Route path="/userlist" component={UserList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
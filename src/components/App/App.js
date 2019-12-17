import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Calculator from '../Calculator/Calculator';

import UserList from '../user-list/user-list';

const App = () => {
  return (
    <BrowserRouter hashType="noslash">
      <Switch>
        <Route path="/calculator" component={Calculator}/>
        <Route path="/userlist" component={UserList}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
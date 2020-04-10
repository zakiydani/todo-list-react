import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Header from './component/Nav'

import Todos from './component/Function/todo-function'
import Todo from './component/Class/todo-class'

function App() {
  return (
    <Router>
     <div className="App">
        <Header />
      <Switch>
        <Route exact path="/">
          <Todos />
        </Route>
        <Route path="/class">
          <Todo />
        </Route>
      </Switch>  
     </div>
    </Router>
  );
}

export default App;

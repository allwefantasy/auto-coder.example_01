import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddExample from './pages/AddExample';
import ListExamples from './pages/ListExamples';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AddExample} />
        <Route path="/list" component={ListExamples} />
      </Switch>
    </Router>
  );
}

export default App;
import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import FeelingInput from '../Form/Feeling.jsx'

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path="/">
          {/* Feeling component here*/}
        </Route>
        <Route exact path="/understanding-page-2">
          {/* Understanding component here */}
        </Route>
        <Route exact path="/support-page-3">
          {/* Support component here */}
        </Route>
        <Route exact path="/comment-step-4">
          {/* Comment component here */}
        </Route>
        <Route exact path="/review-step-5">
          {/* Review component here */}
        </Route>
        <Route exact path="/thank-you-final-step">
          {/* ThankYou component here */}
        </Route>
      </Router>
    </div>
  );
}

export default App;

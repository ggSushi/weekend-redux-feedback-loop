import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Feeling from '../Form/Feeling.jsx'
import Understanding from '../Form/Understanding.jsx';
import Support from '../Form/Support.jsx';
import Comment from '../Form/Comment.jsx';
import Review from '../Form/Review.jsx'

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
          <Feeling />
        </Route>
        <Route exact path="/understanding-page-2">
          {/* Understanding component here */}
          <Understanding />
        </Route>
        <Route exact path="/support-page-3">
          {/* Support component here */}
          <Support />
        </Route>
        <Route exact path="/comment-step-4">
          {/* Comment component here */}
          <Comment />
        </Route>
        <Route exact path="/review-step-5">
          {/* Review component here */}
          <Review />
        </Route>
        <Route exact path="/thank-you-final-step">
          {/* ThankYou component here */}
        </Route>
      </Router>
    </div>
  );
}

export default App;

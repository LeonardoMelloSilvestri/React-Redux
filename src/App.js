import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import User from './components/User';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Route exact path='/' component={() => <Home /> } />
          <Route path='/user/:user_id' render={(props) => <User {...props} /> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

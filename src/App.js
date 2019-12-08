import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import NewUser from './components/NewUser';
import UserDetails from './components/UserDetails';
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Route exact path='/' component={() => <Home /> } />
          <Route path='/user/:user_id' component={(props) => <UserDetails {...props} /> } />
          <Route path='/new_user' component={(props) => <NewUser {...props} /> } />
          <Route path='/edit_user/:user_id' component={(props) => <EditUser {...props} /> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

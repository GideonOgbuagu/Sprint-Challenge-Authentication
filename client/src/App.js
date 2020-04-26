import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Jokes from './components/Jokes';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute'

function App() {
    return (
      <Router>
          <div className="App">
            <header className="App-header">
              <ul>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/jokes">Jokes</NavLink>
                </li>
                <li>
                  <NavLink to="/logout">Log Out</NavLink>
                </li>
              </ul>
            </header>
  
            <Switch>
              <PrivateRoute exact path="/jokes" component={Jokes}/>
              <Route path="/register" component={Register}/>
              <Route path="/login" component={Login}/>
              <Route path="/logout" component={Logout}/>
              <Route component={Register}/>
            </Switch>
          </div>
      </Router>
    );
}

export default App;

import React from 'react';
import Registration from './components/SignUp/SignUp';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import PrivateRoute from './components/withAuth/authRouter';
import CreateNewRecipe from './components/Cards/createNewRecipe';


function App() {
  return (
    <div className="App">
      <Route path='/' component={NavBar} />
      <Route exact path='/registration' component={Registration} />
      <Route path='/login' component={Login} />
      <PrivateRoute path="/protected" component={CreateNewRecipe} />
    </div>
  );
}

export default App;

import React from 'react'
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar/navbar';
import LoginScreen from './screens/LoginScreen/loginScreen'
import SignupScreen from './screens/SignupScreen/singupScreen'
import RoomsScreen from './screens/RoomScreen/roomsScreen';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/rooms" component={RoomsScreen} exact />
        <Route path="/login" component={LoginScreen} />
        <Route path="/signup" component={SignupScreen} />

      </div>
    </Router>
  );
}

export default App;

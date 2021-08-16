import React from 'react'
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar/navbar';
import LoginScreen from './screens/LoginScreen/loginScreen'
import SignupScreen from './screens/SignupScreen/singupScreen'
import RoomsScreen from './screens/RoomScreen/roomsScreen';
import LandingScreen from './screens/LandingScreen/landingScreen';
<<<<<<< HEAD
import ViewRoomScreen from './screens/ViewRoomScreen/viewRoomScreen';
=======
import UserProfile from './screens/UserProfileScreen/userProfileScreen'




>>>>>>> e158c34497d68e0ee34fff6654a402de26357c75

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" component={LandingScreen} exact />
        <Route path="/rooms" component={RoomsScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/signup" component={SignupScreen} />
<<<<<<< HEAD
        <Route path="/room/:id" component={ViewRoomScreen} />

=======
        <Route path="/profile" component={UserProfile} />
>>>>>>> e158c34497d68e0ee34fff6654a402de26357c75
      </div>
    </Router>
  );
}

export default App;

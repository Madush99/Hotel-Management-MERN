import React from 'react'
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import RoomsScreen from './screens/RoomScreen/roomsScreen';

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/rooms" component={RoomsScreen} exact />


      </div>
    </Router>
  );
}

export default App;

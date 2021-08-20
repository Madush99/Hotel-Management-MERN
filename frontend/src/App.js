import React from 'react'
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar/navbar';
import LoginScreen from './screens/LoginScreen/loginScreen'
import SignupScreen from './screens/SignupScreen/singupScreen'
import RoomsScreen from './screens/RoomScreen/roomsScreen';
import LandingScreen from './screens/LandingScreen/landingScreen';
import ViewRoomScreen from './screens/ViewRoomScreen/viewRoomScreen';
import UserProfile from './screens/UserProfileScreen/userProfileScreen'
import weddingInsertScreen from './screens/WeddingInsertScreen/weddingInsertScreen'
import CreateRest from './screens/RestaurantCreate/restCreate'
import Restaurents from './screens/RestaurantsScreen/restaurantsScreen'
import BookingScreen from './screens/BookingScreen/bookingScreen';
import ViewRestaurent from './screens/RestaurantDetailPage/restDetails'
import WeddingScreen from './screens/weddingScreen/WeddingScreen';
import conferenceInsert from './screens/conferenceInsertScreen/conferenceInsert'
import RestaurantList from './screens/AllRestaurant/restaurantTable';
import ConferenceScreen from './screens/conferenceScreen/ConferenceScreen'
import WeddingByIdScreen from './screens/weddingByIdScreen/WeddingByIdScreen'
import CreateRoomScreen from './screens/CreateRoomScreen/createRoomScreen';
import RoomManagementScreen from './screens/RoomManagementScreen/roomManagementScreen';
import RoomsListScreen from './screens/RoomsListScreen/roomsListScreen';
import RestaurantManagement from './screens/RestaurantManagement/restManagement'
import RoomUpdateScreen from './screens/RoomUpdateScreen/roomUpdateScreen';
import ReqScreen from './screens/reqAProposalScreen/reqProInsert'
import AllFoods from './screens/FoodsScreen/foodsScreen';
import FoodManagement from './screens/FoodManagementScreen/foodManagementScreen';








const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" component={LandingScreen} exact />
        <Route path="/rooms" component={RoomsScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/signup" component={SignupScreen} />
        <Route path="/room/:id" component={ViewRoomScreen} />
        <Route path="/roombook/:roomid/:fromdate/:todate" component={BookingScreen} />
        <Route path="/restaurants" component={Restaurents} />
        <Route path="/profile" component={UserProfile} />
        

        <Route path="/weddingInsert" component={weddingInsertScreen} />
        <Route path='/search/:keyword' component={RoomsScreen} />
        <Route path="/weddings" component={WeddingScreen} />
        <Route path="/conferenceInsert" component={conferenceInsert} />
        <Route path="/restaurant/:id" component={ViewRestaurent} />
        <Route path="/conference" component={ConferenceScreen} />
        <Route path="/createRestaurant" component={CreateRest} />
        <Route path="/admin/createRoom" component={CreateRoomScreen} />
        <Route path="/restaurantList" component={RestaurantList} />
        <Route path="/wedding/:id" component={WeddingByIdScreen} />
    
        <Route path="/restaurantManagement" component={RestaurantManagement} />
        <Route path="/update/:id" component={RoomUpdateScreen} />
        <Route path="/roomManagement" component={RoomManagementScreen} />
        <Route path="/listAllRooms" component={RoomsListScreen} />
        <Route path="/requestPropsal" component={ReqScreen} />
        <Route path="/foods" component={AllFoods } />
        <Route path="/foodManagement" component={FoodManagement} />

      </div>
    </Router>
  );
}

export default App;

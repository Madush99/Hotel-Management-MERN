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
import ConferenceByIdScreen from './screens/conferenceByIdScreen/conferenceById'
import FoodDetail from './screens/FoodDetailScreen/foodDetailScreen'
import CartScreen from './screens/CartScreen/cartScreen'
import ShippingScreen from './screens/ShippingScreen/shippingScreen'
import PaymentScreen from './screens/PaymentScreen/payementScreen'
import PlaceOrder from './screens/PlaceOrderScreen/placeOrderScreen'
import HomeScreen from './screens/HomeScreen/homeScreen';
import Nav1 from './components/Navbar/nav';
import OrderScreen from './screens/OrderScreen/orderScreen'
import OrderList from './screens/OrderListScreen/orderListScreen'
import ReservationScreen from './screens/ReservationScreen/reservationScreen'
import WeddingListScreen from './screens/weddingListScreen/weddingListScreen'
import WedEventMgtScreen from './screens/weddingEventMgtScreen/weddingEventMgtScreen'
import TableBookings from './screens/TableBookingListScreen/tableBookinglistScreen'
import ConferenceListScreen from './screens/conferenceListScreen/conferenceListScreen'
import RestaurantUpdateScreen from './screens/RestaurantUpdateScreen/RestaurantUpdateScreen';
import ReservationReport from './screens/RestaurantTableBookingReport/ReservationReport';
import BookinReportScreen from './screens/bookingReportScreen/bookinReportScreen';
import FoodUpdateScreen from './screens/FoodUpdateScreen/FoodUpdateScreen';
import ConferenceUpdateScreen from './screens/ConferenceUpdateScreen/ConferenceUpdateScreen'
import WeddingUpdateScreen from './screens/WeddingUpdateScreen/WeddingUpdateScreen'
import Footer from './components/Footer/footer'




const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Nav1 />
        <Route path="/" component={LandingScreen} exact />
        <Route path="/homescreen" component={HomeScreen} />
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
        <Route path="/foods" component={AllFoods} />
        <Route path="/foodManagement" component={FoodManagement} />
        <Route path="/con/:id" component={ConferenceByIdScreen} />
        <Route path="/food/:id" component={FoodDetail} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/shipping' component={ShippingScreen} />
        <Route path='/payment' component={PaymentScreen} />
        <Route path='/placeorder' component={PlaceOrder} />
        <Route path='/order/:id' component={OrderScreen} />
        <Route path='/orderList' component={OrderList} />
        <Route path='/bookNow/:id' component={ReservationScreen} />
        <Route path='/tablebookings' component={TableBookings} />
        <Route path='/wedList' component={WeddingListScreen} />
        <Route path='/wedEveMgt' component={WedEventMgtScreen} />
        <Route path='/conList' component={ConferenceListScreen} />
        <Route path="/updateRestaurant/:id" component={RestaurantUpdateScreen} />
        <Route path='/tableReservations' component={ReservationReport} />
        <Route path="/bookingreport" component={BookinReportScreen} />
        <Route path="/foodUpdate/:id" component={FoodUpdateScreen} />
        <Route path="/conUpdate/:id" component={ConferenceUpdateScreen} />
        <Route path="/wedUpdate/:id" component={WeddingUpdateScreen} />
       
      </div>
      <Footer />
    </Router>
  );
}

export default App;

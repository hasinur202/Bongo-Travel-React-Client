import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails/ServiceDetails';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddService from './Pages/AddService/AddService';
import MyBooking from './Pages/MyBooking/MyBooking';
import Booking from './Pages/Booking/Booking';
import AllBooking from './Pages/AllBooking/AllBooking';
import Register from './Pages/Register/Register';
import Gallery from './Pages/Gallery/Gallery';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute exact path="/add-tour">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute exact path="/booking/:_id">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute exact path="/my-booking">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute exact path="/manage-all-booking">
              <AllBooking></AllBooking>
            </PrivateRoute>
            <PrivateRoute exact path="/gallery">
              <Gallery></Gallery>
            </PrivateRoute>
            <PrivateRoute path="/service-details/:_id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import AddService from './components/AddService/AddService';
import Services from './components/Home/Services/Services';
import Login from './components/Login/Login/Login';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './components/Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyOrders from './components/Home/MyOrders/MyOrders';
import PlaceOrder from './components/Home/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/placeOrder/:serviceId">
              <PlaceOrder></PlaceOrder>
            </Route>
            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

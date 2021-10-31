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
import ManageOrders from './components/Home/ManageOrders/ManageOrders';
import Features from './components/Home/features/Features';
import Footers from './components/Shared/Footer/Footers';
import ExclusiveOffer from './components/Home/Home/ExclusiveOffer/ExclusiveOffer';

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
            <PrivateRoute path="/placeOrder/:serviceId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/exclusiveOffer">
              <ExclusiveOffer></ExclusiveOffer>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/features">
              <Features></Features>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footers></Footers>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Services from './Pages/Services/Services/Services';
import NotFound from './Pages/NotFound/NotFound';
import Information from './Pages/Information/Information/Information'
import Costs from './Pages/Costs/Costs/Costs';
import ServiceDetails from './Pages/Services/ServiceDetails/ServiceDetails';
import Login from './Pages/Login/Login';
import PrivateRoute from './Utilities/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router basename="/petCare">
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <PrivateRoute path="/service/:serviceCode">
            <ServiceDetails />
          </PrivateRoute>
          <PrivateRoute path="/costs">
            <Costs />
          </PrivateRoute>
          <PrivateRoute path="/informations">
            <Information />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

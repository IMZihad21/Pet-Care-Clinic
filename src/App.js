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

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route path="/services/:serviceCode">
            <ServiceDetails />
          </Route>
          <Route path="/costs">
            <Costs />
          </Route>
          <Route path="/informations">
            <Information />
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

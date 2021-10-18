import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home/Home';
import Header from './components/Pages/Shared/Header/Header';
import Footer from './components/Pages/Shared/Footer/Footer';
import Navbar from './components/Pages/Shared/Navbar/Navbar';
import Services from './components/Pages/Services/Services/Services';
import Service from './components/Pages/Services/Service/Service';
import NotFound from './components/Pages/NotFound/NotFound';
import Information from './components/Pages/Information/Information/Information'
import Costs from './components/Pages/Costs/Costs/Costs';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/services">
            <Services/>
          </Route>
          <Route path="/services/:serviceCode">
            <Service/>
          </Route>
          <Route path="/costs">
            <Costs/>
          </Route>
          <Route path="/informations">
            <Information/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

// App Router
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import Favourites from '../components/Favourites';
import SingleMovie from '../components/SingleMovie';

function AppRouter() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
          <Switch>
              <Route path={'/'} exact><Home /></Route>
              <Route path={'/about'}><About /></Route>
              <Route path={'/favourites'}><Favourites /></Route>
              <Route path={'/singlemovie'}><SingleMovie /></Route>  
          </Switch>
        <Footer />
      </div>  
    </Router>
  );
}
//SINGLE MOVIE IS PLACED IN NAV TEMPORARILY WHILE DEV PAGE
export default AppRouter;
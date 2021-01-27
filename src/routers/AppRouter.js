// App

// Development Components
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Pages
import Home from '../components/Home';
import About from '../components/About';
import Favourites from '../components/Favourites';
import SingleMovie from '../components/SingleMovie';
import PageNotFound from '../components/PageNotFound';
import { APP_FOLDER_NAME } from '../globals/variables';




function AppRouter() {
  return (
    <Router basename={ APP_FOLDER_NAME }>
      <div className="wrapper">
        <Header />
          <main>
            <Switch>
                <Route path={'/'} exact><Home /></Route>
                <Route path={'/sort/:sort'} component={Home} />
                <Route path={'/about'}><About /></Route>
                <Route path={'/favourites'}><Favourites /></Route>
                <Route path={'/single-movie/:id'}><SingleMovie /></Route> 
                <Route><PageNotFound /></Route> 
            </Switch>
            </main>
        <Footer />
      </div>  
    </Router>
  );
}
export default AppRouter;
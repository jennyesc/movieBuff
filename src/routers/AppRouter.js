// App

// Development Components
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {   MD_TOP_URL} from '../globals/variables';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Pages
import Home from '../components/Home';
import About from '../components/About';
import Favourites from '../components/Favourites';
import SingleMovie from '../components/SingleMovie';
import PageNotFound from '../components/PageNotFound';

//import createHistory from 'history/createBrowserHistory';

//export const history = createHistory();



function AppRouter() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
          <main>
            <Switch>
                <Route path={'/'} exact><Home /></Route>
                <Route path={'/sort/:sort'} component={Home} />
                <Route path={'/about'}><About /></Route>
                <Route path={'/favourites'}><Favourites /></Route>
                <Route path={'/single-movie/:id'}><SingleMovie /></Route> 
                
                {/* <Route path="/top-rated" component={WHAT GOES HERE}/> */}

                {/* <Route path = "/popular" component={Popular}/>
                <Route path="/top-rated" component={TopRated}/>
                <Route path="/now-playing" component={NowPlaying}/> */}
                

                <Route><PageNotFound /></Route> 
            </Switch>
            </main>
        <Footer />
      </div>  
    </Router>
  );
}
export default AppRouter;
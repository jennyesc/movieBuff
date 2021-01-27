// Favourites
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useGlobal from '../store/globalAppState';
import Movies from './Movies';
import '../globals/fontawesome';




function Favourites() {

  const [globalState, globalActions] = useGlobal();

  const [ready, setReady] = useState(false);

  useEffect(() => {
    globalActions.setFavs();
    setReady(true);
  }, [globalActions]);

    return (
      <main>
        <div className="line"> </div>
        <section className="fav-movie-heading">
            <h2>My Favourites</h2>
            
        </section>
        <div className="fav-container">
          
          {globalState.favs.length === 0 ?
          <p className="no-fav-par">No favourited movies. Please visit the <Link to={'/'}>home page</Link> to favourite a movie.</p> :
          (ready && <Movies movies={globalState.favs} checkFav={true} />)
        }
           
        

        </div> {/* end desktop container */}


        
      </main>
    );
  }
  
  export default Favourites;
  
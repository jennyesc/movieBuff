// Favourites
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useGlobal from '../store/globalAppState';
import Movies from './Movies';
// import poster from '../images/diehard.jpg';
import '../globals/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Favourites() {

  const [globalState, globalActions] = useGlobal();

  const [ready, setReady] = useState(false);

  useEffect(() => {
    console.log('hello');
    globalActions.setFavs();
    setReady(true);
  }, [globalActions]);

    return (
      <main>
        <div className="line"> </div>
        <section className="fav-movie-heading">
            <h2>My Favourites</h2>
            <ul>
              <li>Movies (3)</li>
              <li>TV (0)</li>

            </ul>
        </section>
        <div className="desktop-fav-container">
          
          {globalState.favs.length === 0 ?
          <p>No favourited movies. Please visit the <Link to={'/'}>home page</Link> to favourite a movie.</p> :
          (ready && <Movies movies={globalState.favs} checkFav={true} />)
        }
            {/* /* <section className="fav-movie-container">
      
            <div className="movie-poster">
                <img className="poster-image" src={poster} alt="Die hard movie poster" ></img>
              
                <div className="movie-rating">
                  <p> 44%</p>
                </div>
            </div>
            
            <div className="circle-container">
                    <p className="circle">46%</p>
            </div>
            
            <div className="movie-description">   
                <h2>Hard Kill</h2>
                <h3>Oct 23, 2020</h3>
                <span className="more-info">More Info</span>
                <p>The work of billionaire tech CEO Donavan Chalmers is so valuable
                that he hires ...</p>
            </div>
          
          </section>

          <div className="play-trailer-bar">
              <div className="play-icon">  
                  <i className="fa"> <FontAwesomeIcon icon="play-circle" /> </i>
                  <p>Play Trailer</p>
                  
              </div>   
          </div>

          <div className="fav-input-container">
            <div className="icon-container">
              <div className="icon play-icon">  
                      <i className="fa play-circle"> <FontAwesomeIcon icon="play-circle" /> </i>
                      <p className="play-circle">Play Trailer</p>
                </div> 
              
              <div className="icon rating-icon">  
                    <i className="fa"> <FontAwesomeIcon icon="star" /> </i>
                    <p>Your Rating</p>
              </div> 

              <div className=" icon fav-icon">  
                    <i className="fa"> <FontAwesomeIcon icon="heart" /> </i>
                    <p>Favourite</p>
              </div> 
              <div className="icon list-icon">  
                    <i className="fa"> <FontAwesomeIcon icon="list" /> </i>
                    <p>Add to List</p>
              </div> 

              <div className="icon remove-icon">  
                    <i className="fa"> <FontAwesomeIcon icon="times-circle" /> </i>
                    <p>Remove</p>
              </div> 



            // </div> end icon-container */}

          {/* </div> end fav-input-container */} 

        

        </div> {/* end desktop container */}


        
      </main>
    );
  }
  
  export default Favourites;
  
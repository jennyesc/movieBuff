// Favourites
import poster from '../images/diehard.jpg';
import '../globals/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Favourites() {
    return (
      <main>
        <div className="line"> </div>
        <section className="fav-movie-cont">
            <h2>My Favourites</h2>
            <ul>
              <li>Movies (3)</li>
              <li>TV (0)</li>

            </ul>
        </section>

        <section className="movie-container">
          
          
          <div className="movie-poster">
              <img className="poster-image" src={poster} alt="Die hard movie poster" ></img>
            
              <div className="movie-rating">
                <p> 44%</p>
              </div>
          </div>
          
          <div className="movie-description">
              <h2>Hard Kill</h2>
              <h3>Oct 23, 2020</h3>
              <p>The work of billionaire tech CEO Donavan Chalmers is so valuable
               that he hires ...</p>
          </div>
        </section>

        <div className="play-trailer-bar">
            <div className="play-icon">  
                <i className="fa"> <FontAwesomeIcon icon="play-circle" /> </i>
            </div>   
        </div>

      </main>
    );
  }
  
  export default Favourites;
  
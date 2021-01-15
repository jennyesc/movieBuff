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

        <section className="fav-movie-container">
    
          <div className="movie-poster">
              <img className="poster-image" src={poster} alt="Die hard movie poster" ></img>
            
              <div className="movie-rating">
                <p> 44%</p>
              </div>
          </div>
          
          <div className="movie-description">
            <div className="">
            <p className="circle">46%</p>
            </div>
              <h2>Hard Kill</h2>
              <h3>Oct 23, 2020</h3>
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



          </div>

        </div>

      </main>
    );
  }
  
  export default Favourites;
  
// Single Movie

import { useState, useEffect } from 'react';
import { MD_API_KEY_ONLY, MD_LAN } from '../globals/variables';
//import { Link, Redirect, useParams} from 'react-router-dom';
import background from '../images/diehard.jpg';
import '../globals/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import poster from '../images/diehard.jpg';
import { useParams} from 'react-router-dom';
import {shortenPars, percentNumber} from '../utilities/movieMaker';

// const PageSingleMovie = () => {

 
  // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  
// }

const SingleMovie = () => {

  let { id } = useParams()

  const [movie, setMovie] = useState(null);

  useEffect( () => {

    const fetchMovie = async () => {
      const res = await fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=${MD_API_KEY_ONLY}${MD_LAN}`);
      let data = await res.json();
      console.log(data);
      //console.log('API Call: ', `https://api.themoviedb.org/3/movie/${id}&api_key=25f11b1e22143258eab2e1001edc3432${MD_LAN}`);
      setMovie(data);
  }

  fetchMovie();

  }, [] );

    return (
      <main>
        <section className="single-movie-cont" >

          <div className="poster-section" >
             
            <div className="single-bg" style={{ backgroundImage: `url(${background})`}} >  
            </div>
            <div className="poster-single">
              <img src={poster} alt="Die hard movie poster" />
            </div>
         </div>  

          <div className="icon-container">
            
            <div className="icon percentage-icon">  
                  <i className="rating">{percentNumber(movie.vote_average)}%</i>
                  
            </div> 

            <div className=" icon fav-icon">  
                  <i className="fa"> <FontAwesomeIcon icon="heart" /> </i>
                  
            </div> 
            <div className="icon bookmark-icon">  
                  <i className="fa"> <FontAwesomeIcon icon="bookmark" /> </i>
                  
            </div> 

            <div className="icon star-icon">  
                  <i className="fa"> <FontAwesomeIcon icon="star" /> </i>
                  
            </div> 

            <div className=" icon play-icon">
                <i className="fa"> <FontAwesomeIcon icon="play-circle" /> </i>
                
            </div>


          </div>

        <div className="movie-info-container">

           <div className="rating-icon">   
               {/* PLACEHOLDER ICON */}
               <i className="fa"> <FontAwesomeIcon icon="theater-masks" /> </i> 

           </div> 




          <div className="movie-info">
             <p>10/26/2020 (IE) | 1hr 46m | Fantasy, Family, Adventure</p>
          </div>
          </div>
          
          <h2> {movie.title}</h2>

          <div className="movie-summary">
            <h3>Overview</h3>
            <p>In late 1967, a young orphaned boy goes to live with his 
              loving grandma in the rural Alabama town of  Demopolis. 
              As the boy and his gratndmother encounter some deceptively 
              glamorous but thoroughly diabolical witches, she wisely whisks 
              him away to a seaside resort. Regrettably, they arrive at 
              precisely the same time that the world's Grand High Witch has gathered.
            </p>
      
          </div> {/* movie info container end */}

          <div className="cast-container">
            <h3>Top Billed Cast</h3>
            
            <div className="cast-head">
              <p>headshot of cast</p>
           </div>

           

            
          </div> {/* cast container end */}
          

        
        </section>
      </main>
    );
  }
  
  export default SingleMovie;
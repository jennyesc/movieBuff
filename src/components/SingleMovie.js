// Single Movie

import { useState, useEffect } from 'react';
import { MD_API_KEY_ONLY, MD_LAN } from '../globals/variables';
//import { Link, Redirect, useParams} from 'react-router-dom';
import background from '../images/diehard.jpg';
import '../globals/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import poster from '../images/diehard.jpg';
import { useParams} from 'react-router-dom';
import {percentNumber, timeConvert } from '../utilities/movieMaker';
import formatDate from '../utilities/dateMaker';



const SingleMovie = () => {

  let { id } = useParams()

  const [movie, setMovie] = useState(null);

  

    const fetchMovie = async () => {
      const res = await fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=${MD_API_KEY_ONLY}${MD_LAN}`);
      let data = await res.json();
      console.log(data);
      setMovie(data);
    };

  const [cast, setCast] = useState(null);

   const fetchCast = async () =>{
    const res = await fetch ( `https://api.themoviedb.org/3/movie/${id}?api_key=${MD_API_KEY_ONLY}${MD_LAN}`);
    let data = await res.json();
    if (cast !== null) {
      console.log(cast);
    }
    // console.log(cast);
    //setCast(data);
   }


  useEffect( () => {
  fetchMovie();
  fetchCast();
  }, [] );

  
  

    return (
      <main>
        {movie !== null &&
          <section className="single-movie-cont" > 

            <div className="poster-section" >
              
              <div className="single-bg" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}} >  
              </div>
              <div className="poster-single">
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
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
                <p>{movie.adult == true ? "Rated-R" : "PG-13"}</p>
                

            </div> 

            <div className="movie-info">          
              <p>{formatDate(movie.release_date)} | {timeConvert(movie.runtime)} | {movie.genres[0].name}</p>
            </div>
            
            </div>
              {/* {genres.map(genre=>{returns <li>{genre}</li>})} */}
            <h2> {movie.title}</h2>
            <h3 className="tag-line"> {movie.tagline}</h3>


            <div className="movie-summary">
              <h3>Overview</h3>
              
              <p>{movie.overview}</p>
        
            </div> {/* movie info container end */}

            <section className="cast-container">
              <h3>Top Billed Cast</h3>
              
              {/* container for headshot */}
              <div className="cast-head">
              
                {/* <p>{cast}</p> */}
            </div>
              
            </section> {/* cast container end */}
            

          
          </section>
        }
      </main>
    );
  }
  
  export default SingleMovie;
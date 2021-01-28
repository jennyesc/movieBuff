// Single Movie

import { useState, useEffect } from 'react';
import { MD_API_KEY_ONLY, MD_LAN } from '../globals/variables';
import '../globals/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams} from 'react-router-dom';
import {percentNumber, timeConvert } from '../utilities/movieMaker';
import formatDate from '../utilities/dateMaker';
import FavouriteButton from './FavouriteButton';
import placeholder from '../images/profPlaceholder.jpg';
import noPoster from '../images/poster-placeholder.jpg';




const SingleMovie = () => {

  let { id } = useParams()

  const [movie, setMovie] = useState(null);
     const fetchMovie = async () => {
      window.scrollTo(0,0);
      const res = await fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=${MD_API_KEY_ONLY}${MD_LAN}&append_to_response=credits,videos`); 
      let data = await res.json();
      console.log(data);
      
      setMovie(data);
    };

  useEffect( () => {
    
   
  fetchMovie();
 
  }, [] );

  const makeGenres = (genres) => {
    return genres.map((genre, i, arr) => {
     if(i === arr.length - 1){
       return (<span className="make-genres-arr" key={i}>{genre.name}</span>);
     }else {
       return (<span className="make-genres-arr" key={i}>{genre.name}, </span>);
     }
    });
  }

 const createCasts = (casts) => {


    const top6 = casts.filter(cast => cast.order < 6);

    return top6.map((cast, i) => {  
      return (
        <div className="cast" key={i}> 
          { cast.profile_path !== null ? <img className="cast-photo" key={i} src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} alt={cast.name} /> :          <img className="placeholder-photo" src={placeholder} alt="profile placeholder" />
          }
          <div> 
            <p className="cast-name">{cast.name}</p>
            <p className="cast-character">{cast.character}</p>
          </div>
        </div>    
    ) }
    );
  }
    return (
      <main>
       
        {movie !== null && 
          <section className="single-movie-cont" > 
          
              <div className="poster-section" > 
                <div className="single-bg" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}} >  
                </div>
                <div className="poster-single">
                {movie.poster_path !== null ?
                  <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />:
                  <img src={noPoster} alt="No Movie Poster Available" />
                }
                </div>
            </div>    
              <div className="icon-container">
                <div className="icon percentage-icon">  
                      <i className="rating">{percentNumber(movie.vote_average)}%</i>         
                </div>
                <div className=" icon fav-icon">
                  <FavouriteButton movie={movie}/>  
                </div> 
                <div className=" icon play-icon">
                    <i className="fa"> <FontAwesomeIcon icon="play-circle" /> </i>
              </div>
            </div>

            <div className="movie-info-container">
              <div className="rating-icon">   
                  <p>{movie.adult === true ? "Rated-R" : "PG-13"}</p>
              </div> 
              <div className="movie-info">          
                <p>{formatDate(movie.release_date)} | {timeConvert(movie.runtime)} </p>
                <p className="genre-mob"> {makeGenres(movie.genres)}  </p>
              </div>
            </div>
          
          <h2> {movie.title}</h2>
          
          <h3 className="tag-line"> {movie.tagline}</h3>

          <div className="movie-summary">
            <h3>Overview</h3>   
            <p>{movie.overview}</p>
        
          </div> {/* movie summary container end */}

              <section className="cast-container">
                <h3 className="cast-heading">Top Billed Cast</h3>
                <div className="cast-members"> 
                  {createCasts(movie.credits.cast)}
                </div> 
              </section> {/* cast container end */}
          </section>  // single movie container end
          
          
        } 
      </main>
    );
  }
  
  export default SingleMovie;
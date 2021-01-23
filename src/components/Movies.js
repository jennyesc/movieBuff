// Movies
import { Link } from 'react-router-dom';
import formatDate from '../utilities/dateMaker';
import {shortenPars, percentNumber} from '../utilities/movieMaker';
import faveIcon from '../images/fav-heart.png';

function Movies( {movies} ){
     function makeMovies(movies){
        return movies.map((movie, i) => {
            return (
              <section key={i} className="index-movie-container">  
        
                <div className="movie-poster">
                    <Link to={`/single-movie/${movie.id}`}><img className="poster-image" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} /></Link> 
                  
                    <div className="movie-rating">
                      <p>{percentNumber(movie.vote_average)}%</p>
                    </div>
                </div>
                
                <div className="movie-description">
                <h2>{movie.title}</h2>
                    <div className="dt-movie-infobox">
                      <h3>Release Date: <span className="date-break"> <br /> </span>{formatDate(movie.release_date)}</h3>
                      <Link to={`/single-movie/${movie.id}`} className="dt-more-infolink"> More Info</Link>
                      {/* <Link to="/singleMovie">About</Link> */}
                    
                        <p>{shortenPars(movie.overview)}...</p>
                    </div>
        
                </div>
                <div className="fav-heart-icon">
                <Link to={`/favourites/`}><img className="heart-icon" src={faveIcon} alt="fav heart icon" /></Link> 
        
                </div>
              </section>
            );
        
          });
        } 

    
    
    return( 
        <div className="desktop-grid">
          { makeMovies(movies) }
        </div>  


    );

}
export default Movies;
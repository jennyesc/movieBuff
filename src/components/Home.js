// Home

import { useState, useEffect } from 'react';
import { MD_BASE_URL, MD_API_KEY, MD_LAN } from '../globals/variables';
import { Link } from 'react-router-dom';
import formatDate from '../utilities/dateMaker';
import {shortenPars, percentNumber} from '../utilities/movieMaker';



const Home = () => {

      
  const [movies, setMovies] = useState(null);

  useEffect( () => {

    const fetchMovie = async () => {
      const res = await fetch( `${MD_BASE_URL}${MD_API_KEY}${MD_LAN}`);
      let data = await res.json();
      console.log(data);
      setMovies(data.results.splice(0,20));
  }

  fetchMovie();

  }, [] );

function movieGrid(arr) {
  return arr.map((movie, i) => {
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
            
            </section>
    )

  })
} 

//function Home() {
    return (
      <main>
        <div className="line"> </div>
          <form className="form-select-group">
            <div className="input-group input-select-group">
              {/* <label htmlFor="">Movies</label> */}
                <select id="selectChart" name="selectChart" className="selection">
                  <option value="popular" selected>Popular</option>
                  <option value="top_rated">Top Rated</option>
                  <option value="now_playing">Now Playing</option>
                  <option value="upcoming">Upcoming</option>
                </select>  
            </div>  
          </form>
        <div className="desktop-grid">
          {movies !== null && movieGrid(movies)}
        </div>  
      </main>
    );
  }
  
  export default Home;
  
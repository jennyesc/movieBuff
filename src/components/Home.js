// Home

import { useState, useEffect } from 'react';
import { MD_BASE_URL, MD_API_KEY, MD_LAN } from '../globals/variables';
import { Link } from 'react-router-dom';
import poster from '../images/diehard.jpg';


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
    return <p key={i}> {movie.title}</p>
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
       {movies !== null && console.log(movies)}
       <section className="index-movie-container">  

          <div className="movie-poster">
              <Link to="/singleMovie"><img className="poster-image" src={poster} alt="Die hard movie poster" /></Link> 
            
              <div className="movie-rating">
                <p> 44%</p>
              </div>
          </div>
          
          <div className="movie-description">
              <h2>Hard Kill</h2>
              <div className="dt-movie-infobox">
                <h3>Oct 23, 2020</h3>
                <Link to="/singleMovie"><p className="dt-more-infolink"> More Info </p></Link>
                {/* <Link to="/singleMovie">About</Link> */}
              
                <p>The work of billionaire tech CEO Donavan Chalmers is so valuable
                that he hires ...</p>
               </div>

          </div>
        
        </section>

       


        </div>  
      </main>
    );
  }
  
  export default Home;
  
// Home
import { NavLink, Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MD_BASE_URL_NO_SORT, MD_API_KEY, MD_LAN, MD_TOP_URL, MD_API_KEY_ONLY } from '../globals/variables';
import formatDate from '../utilities/dateMaker';
import {shortenPars, percentNumber} from '../utilities/movieMaker';
import faveIcon from '../images/fav-heart.png';




const Home = () => {

  const {sort} = useParams();
  

  const [sortType, setSortType] = useState(null);
      
  const [movies, setMovies] = useState(null);

  const setURLSort = (sort) => {
    let urlSort;
    switch (sort){
      case 'popular':
        urlSort = 'popular';
        break;
      case 'top-rated':
        urlSort = 'top_rated';
        break;
      case 'now-playing':
        urlSort = 'now_playing';
        break;
      case 'upcoming':
        urlSort = 'upcoming';
        break;
      default:
        urlSort = 'popular';
    }
      
    return urlSort;

  }

  useEffect( () => {

    //setSortType(sort);
    const urlSort = setURLSort(sort)
    console.log(urlSort);
    
    const fetchMovie = async () => {
      const res = await fetch( `${MD_BASE_URL_NO_SORT}${urlSort}?${MD_API_KEY}${MD_LAN}`);
      let data = await res.json();
      //console.log(data.results);
      setMovies(data.results.splice(0,20));
  }

  fetchMovie();
  

  }, [sort] );

function movieGrid(arr) {
  console.log(arr);
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
        <div className="fav-heart-icon">
        <Link to={`/favourites/`}><img className="heart-icon" src={faveIcon} alt="fav heart icon" /></Link> 

        </div>
      </section>
    )

  })
} 

////////function Home() {
    return (
      <main>
        <div className="line"> </div>
        {/* 
        
        <form className="form-select-group">
            <div className="input-group input-select-group">
      
                 
                  <option value="now-playing">Now Playing</option>
                  <option value="upcoming">Upcoming</option>
                </select>  
            </div>  
          </form>
        
        
        
        
        
        */}
  {/* */ }
        <nav className="movie-sort-nav">
          <ul>
            <li><NavLink to={'/sort/popular'}>Popular</NavLink></li>
            <li><NavLink to={'/sort/top-rated'}>Top Rated</NavLink></li>
            <li><NavLink to={'/sort/upcoming'}>Upcoming</NavLink></li>
          </ul>
        </nav>
          
        <div className="desktop-grid">
          {movies !== null && movieGrid(movies)}
        </div>  
      </main>
    );
  }
  
  export default Home;
  
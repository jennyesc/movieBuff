// Home
import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MD_BASE_URL_NO_SORT, MD_API_KEY, MD_LAN } from '../globals/variables';
import Movies from './Movies';



const Home = () => {

  const {sort} = useParams();
      
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

    
    const urlSort = setURLSort(sort)
    console.log(urlSort);
    
    const fetchMovie = async () => {
      const res = await fetch( `${MD_BASE_URL_NO_SORT}${urlSort}?${MD_API_KEY}${MD_LAN}`);
      let data = await res.json();
      
      setMovies(data.results.splice(0,20));
  }

  fetchMovie();
  

  }, [sort] );

  return (
      <main>
        <div className="line"> </div>

      


        <nav className="movie-sort-nav">
          <ul className="nav-container">
            <li><NavLink to={'/sort/popular'}>Popular</NavLink></li>
            <li><NavLink to={'/sort/top-rated'}>Top Rated</NavLink></li>
            <li><NavLink to={'/sort/now-playing'}>Now Playing</NavLink></li>
            <li><NavLink to={'/sort/upcoming'}>Upcoming</NavLink></li>

          </ul>
        </nav>
          
        <div className="desktop-grid">
          {movies !== null && <Movies movies={movies} /> }
        </div>  
        
      </main>
    );
  }
  
  export default Home;
  
// Single Movie
import { Link, Redirect, useParams} from 'react-router-dom';
import background from '../images/diehard.jpg';
import '../globals/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PageSingleMovie = () => {

  let { id } = useParams()

  
}


function SingleMovie() {
    return (
      <main>
        <section className="single-movie-cont">

          <div className="poster-section">
             
            <div className="single-bg" style={{ backgroundImage: `url(${background})`}} >  
            </div>
            
            <div className="poster-single" style={{ backgroundImage: `url(${background})`}}>
            </div>

          </div>  

          <div className="single-bar">
              <div className="rating">
                <p><span className="rating-text">71%</span> User Score  </p>

              </div>

              <div className="play-container">
                <i className="fa"> <FontAwesomeIcon icon="play-circle" /> </i>
                <p>Play Trailer</p>
              </div>
          </div>

                  
          <div className="icon-container">
            
            <div className="icon list-icon">  
                  <i className="fa"> <FontAwesomeIcon icon="list" /> </i>
                  
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

         <h2> Movie Title</h2>

        <div className="movie-info-container">

           <div className="rating-icon">   
               {/* PLACEHOLDER ICON */}
               <i className="fa"> <FontAwesomeIcon icon="theater-masks" /> </i> 

           </div>

          <div className="movie-info">
             <p>10/26/2020 (IE) | 1hr 46m</p>
             <p>Fantasy, Family, Adventure</p>
          </div>
          </div>
          
          <div className="movie-summary">
            <h3>Overview</h3>
            <p>In late 1967, a young orphaned boy goes to live with his 
              loving grandma in the rural Alabama town of  Demopolis. 
              As the boy and his gratndmother encounter some deceptively 
              glamorous but thoroughly diabolical witches, she wisely whisks 
              him away to a seaside resort. Regrettably, they arrive at 
              precisely the same time that the world's Grand High Witch has gathered.
            </p>
         </div>

        
        </section>
      </main>
    );
  }
  
  export default SingleMovie;
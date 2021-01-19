// Single Movie
import { Link, Redirect, useParams} from 'react-router-dom';
import background from '../images/diehard.jpg';
import '../globals/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import poster from '../images/diehard.jpg';

const PageSingleMovie = () => {

  let { id } = useParams()

  
}


function SingleMovie() {
    return (
      <main>
        <section className="single-movie-cont" >

          <div className="poster-section" style={{ backgroundImage: `url(${background})`}}>
             
            {/* <div className="single-bg"  >  
            </div> */}
            
            <img className="poster-single" src={poster} alt="Die hard movie poster" />
            

          </div>  

          

                  
          <div className="icon-container">
            
            <div className="icon percentage-icon">  
                  <i className="fa fa-rating"> <FontAwesomeIcon icon="percentage" /> </i>
                  
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
          
          <h2> Movie Title</h2>

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

           <div className="cast-head">
              <p>headshot of cast</p>
           </div>


           <div className="cast-head">
              <p>headshot of cast</p>
           </div>


           <div className="cast-head">
              <p>headshot of cast</p>
           </div>
           <div className="cast-head">
              <p>headshot of cast</p>
           </div>

            
          </div> {/* cast container end */}
          

        
        </section>
      </main>
    );
  }
  
  export default SingleMovie;
// Single Movie

import '../globals/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import poster from '../images/diehard.jpg';

function SingleMovie() {
    return (
      <main>
        <section className="single-movie-cont">
           <div className="poster-section">
           <img className="poster-single" src={poster} alt="Die hard movie poster" ></img>


           </div>
        </section>
      </main>
    );
  }
  
  export default SingleMovie;
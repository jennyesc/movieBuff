// Home

import poster from '../images/diehard.jpg';


function Home() {
    return (
      <main>
       <section>
        <div className="movie-poster">
           
              <img src={poster} alt="Die hard movie poster"></img>
            
          <div className="movie-description">
              <h1>Hard Kill</h1>
              <h2>Oct 23, 2020</h2>
              <p>The work of billionaire tech CEO Donavan Chalmers is so valuable
               that he hires mercenaries to protect it ...</p>
          </div>
        </div>
        </section>
      </main>
    );
  }
  
  export default Home;
  
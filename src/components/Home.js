// Home

import poster from '../images/diehard.jpg';


function Home() {
    return (
      <main>
        <section>
            <h2>Home Page</h2>
        </section>
        <div className="movie-poster">
           <picture>
              <img src={poster} alt="Die hard movie poster"></img>
            </picture>
        </div>
      </main>
    );
  }
  
  export default Home;
  
//About
import background from '../images/about-bg.jpg';
import logo from '../images/tmdb-logo.png';

function About () {
    return (
        <main>
            <section>
                <div className="page-info-container">
                    <div className="page-bg">
                        <div className="img" style={{ backgroundImage: `url(${background})`}}>
                            <div className="about-container">
                                <div className="about-text">
                                    <h1 className="align-one">Hello!</h1>
                                    
                                        <p>Welcome to The Movie Buff movie database world. We are a 
                                            community of movie buffs, who love to share their opinion on movies. 
                                            We pride ourselves in running one of the most diverse movie database to date.
                                        </p>
                                    
                                        <p>The Movie Buff uses the <span className="tmbd">TMDb</span> API but is 
                                        not endorsed or certified by <span className="tmbd"> TMDb</span>.
                                        </p>
                                        
                                        <p>
                                            <img className="logo" src={logo} alt="The Movie Database logo"></img>
                                        </p> 
                                    
                                        <h5 className="align-two">How it works</h5>
                                    
                                    <div className="btn-container">
                                        <div className="single-btn">
                                            <p className="circle">1</p> 
                                            <div className="btn"> 
                                                <p>On the home page, view the top 20 movies listed for each category 
                                                <span className="ie"> (ie. Popular, Top Rated, Now Playing and Upcoming).</span></p>
                                            </div>
                                        </div>
                                        <div className="single-btn">
                                            <p className="circle">2</p> 
                                            <div className="btn">
                                                <p>Select a movie and view the details, such as overview, ratings and top cast.</p>
                                            </div>
                                        </div>
                                        <div className="single-btn">
                                            <p className="circle">3</p> 
                                            <div className="btn"> 
                                                <p>When you find one you like, you can add them to your favourites.</p>
                                            </div>
                                        </div>
                                        <div className="single-btn">
                                            <p className="circle">4</p> 
                                            <div className="btn"> 
                                                <p> Keep an eye on the Movie Buff, as it will continue to expand and grow 
                                                 its functionality.</p>
                                            </div>
                                        </div>

                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
       
    );
}

export default About;
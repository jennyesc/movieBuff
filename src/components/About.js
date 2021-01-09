//About
import background from '../images/about-bg.jpg';

function About () {
    return (
        <main>
            <section>
                <div className="page-info-container">
                    <div className="page-bg">
                        <div style={{ backgroundImage: `url(${background})` }}>
                        
                            <div className="about-text">
                                <h1 className="align-one">Hello!</h1>
                                <div className="p-one">   
                                    <p>Welcome to The Movie Buff movie and TV database world. We are a 
                                        community of Movie Buffs, who love to share their opinion on movies and TV shows. We pride ourselves in running one of the
                                        most diverse movie and TV database to date.
                                    </p>
                                </div> 
                                <div className="p-two">
                                <p>The Movie Buff started in 2014 when there was a need for a people
                                        movie and TV database community. Word spread and here we are with 
                                        over 10,000 memebers and growing every day.
                                </p>
                                </div>
                                    <h5 className="align-two">How it works</h5>
                                
                                <div className="btn-container">
                                    <div className="btn-one">
                                        <p className="circle">1</p> 
                                        <button className="btn"> 
                                            <p>Join the community by</p>
                                            <p className="color">creating an account.</p>
                                        </button>
                                    </div>
                                    <div className="btn-two">
                                        <p className="circle">2</p> 
                                        <button className="btn">
                                            <p>Customize your profile and read the</p> 
                                            <p className="color">Community Guidelines.</p>
                                        </button>
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
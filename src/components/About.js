//About
import background from '../images/about-bg.jpg';

function About () {
    return (
        <main>
            <section>
                <div className="page-info-container">
                    <div className="page-bg">
                        <img src={background} alt="About page backgroung" ></img>
                        <div className="about-text">
                            <h1>Hello!</h1>
                                
                            <p>Welcome to The Movie Buff movie and TV database world. We are a 
                                community of Movie buffs, who love to share their opinion on movies and TV shows. We pride ourselves in running one of the
                                most diverse movie and TV database to date.
                            </p>
                            <p>The Movie Buff started in 2014 when there was a need for a people
                                    movie and TV database community. Word spread and here we are with 
                                    over 10,000 memebers and growing every day.
                            </p>
                                <h3>How it works</h3>
                            <div className="btn-container">
                                <p className="circle"> 1 </p> 
                                <button className="btn"> Join the community by creating an account.</button>
                                <p className="circle"> 2 </p> 
                                <button className="btn">Customize your profile and read the Community Guidelines.</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        </main>
       
    );
}

export default About;
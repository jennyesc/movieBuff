//Header
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Header (){
    return (
        <header>
            <div className="header-top-row">
            
                    <button className="btn-main-nav">
                            <span className="hamburger-icon">
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>
                            </span>
                    </button>

                    <picture>
                        <img src="images/movieBuff.png" alt="The Movie Buff Logo"></img>
                    </picture>
                
                
                <div className="log-in-links log-in-links-mobile">
                    <ul>
                        <li>

                        </li>
                    </ul>
                </div>

                <div className="header-row">
                    <Nav />
                </div>

                <div className="search">
                    <form>

                        <input type="image" name="submit" src="" alt="submit"></input>
                        <input type="search" placeholder="Search for movies, tv shows, people" name="search"></input> 
                        
                    </form>
                </div>

            </div>
                
        </header> 
    );       
}

export default Header;

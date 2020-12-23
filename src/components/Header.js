//Header
import { Link } from 'react-router-dom';
import Nav from './Nav';
import logo from '../images/movieBuff.png';

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
                         <Link to={'/'}><img src={logo} alt="The Movie Buff Logo"></img></Link>
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
                        
                        <input type="search" placeholder="Search for movies.." name="search"></input> 
                        
                    </form>
                </div>

            </div>
                
        </header> 
    );       
}

export default Header;

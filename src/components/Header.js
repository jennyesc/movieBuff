//Header
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Nav from './Nav';
import logo from '../images/movieBuff.png';
import '../globals/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Header (){
    return (
        <header>
            
            <div className="main-container">

                <div className="header-top-row">
                
                    <picture className="logo-container">
                        <Link to={'/'}><img className="logo" src={logo} alt="The Movie Buff Logo"></img></Link>
                    </picture>

                    <nav className="main-nav" >
                        <ul className="desktop-nav">
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/about'}>About</NavLink></li>
                            <li><NavLink to={'/favourites'}>Favourites</NavLink> </li>
                        </ul>
                    </nav>

                    <div className="right-nav">                        
                        <div className="icons">   
                            <i className="fa"> <FontAwesomeIcon icon="search" /> </i>
                            
                            <i className="fa"><FontAwesomeIcon icon="user" /></i>
                        </div>   

                        <div className="btn-container">
                            <button className="btn">
                                <Link to={'/About'}>Join Now</Link>
                            </button>
                        </div>    
                    </div>
                    
                    
                    <div className="search-box">
                        <form>
                            <input type="search" placeholder="Search for movies.." name="search"></input> 
                        </form>
                    </div>

                    </div>
                </div>     
                <div className="mobile-menu">
                    <Nav />
                </div> 
                     
        </header> 
    );       
}

export default Header;

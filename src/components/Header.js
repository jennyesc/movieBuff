//Header
import { Link } from 'react-router-dom';
import Nav from './Nav';
import logo from '../images/movieBuff.png';
import '../globals/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Header (){
    return (
        <header>
        
            <div className="header-top-row">
            

                    <picture className="logo-container">
                         <Link to={'/'}><img className="logo" src={logo} alt="The Movie Buff Logo"></img></Link>
                    </picture>
                

                
                <div className="icons">  
                    
                    <i className="fa"> <FontAwesomeIcon icon="search" /> </i>
                    
                    <i className="fa"><FontAwesomeIcon icon="user" /></i>
                    
                
                </div>   
                
                
                
                
                
                <div className="search-box">
                    <form>
                        <input type="search" placeholder="Search for movies.." name="search"></input> 
                    </form>
                </div>
                 

                 
            
            


            </div>     

                         
            

            <div className="mobile-menu">
                <Nav />
            </div>

        

            
                
        </header> 
    );       
}

export default Header;

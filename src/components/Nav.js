//Nav
import { NavLink } from 'react-router-dom';

function Nav(){
    return( 
    <nav className="main-nav" >
            <ul className="mobile-nav">
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/about'}>About</NavLink></li>
                <li><NavLink to={'/favourites'}>Favourites</NavLink> </li>
                {/* <li><NavLink to={'/singleMovie'}>Single</NavLink> </li> */}
            </ul>
            
    </nav>
//SINGLE IS ONLY TEMPORARY DURING DEVELOPMENT


    );

}
export default Nav;
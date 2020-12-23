//Nav
import { NavLink } from 'react-router-dom';

function Nav() {
    return(

        <nav className="main-nav">
            <ul className="nav-ul">
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink to={'/favourites'}>Favourites</NavLink>
                </li>
                <li>
                    <NavLink to={'/single-movie'}>Individual Movie</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
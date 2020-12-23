//Nav

const { NavLink } = require("react-router-dom");

<nav className="main-nav">
    <ul className="nav-ul">
        <li><NavLink to={'/'} exact>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/favourites'}>Favourites</NavLink></li>
        <li><NavLink to={'/single-movie'}>Individual Movie</NavLink></li>
    </ul>
</nav>
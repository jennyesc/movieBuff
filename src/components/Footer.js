// Footer
import { Link } from 'react-router-dom';
import logo from '../images/movieBuff.png';

function Footer() {

    const d = new Date();
    const year = d.getFullYear();

  return (
    <footer>
      <div className="footer-top-row">
          
          <picture className="logo-container">
            <Link to={'/'}><img className="logo" src={logo} alt="The Movie Buff Logo"></img></Link>
          </picture>
          
          <button className="btn">Join the Community</button>
      
        <ul>
          <div className="footer-menu">
            <li className="uppercase">About</li>
            <li>About TMD</li>
            <li>Support Forums</li>
            <li> API</li>
          </div>
        
          <div className="footer-menu">
            <li className="uppercase">Community</li>
            <li>Guidelines</li>
            <li>Discussions</li>
            <li>Leaderboard</li>
          </div>  
     
          <div className="footer-menu">
            <li className="uppercase">Contribute</li>
            <li>Get Involved FAQ</li>
            <li>3rd Party Applications</li>
            <li>Add New Movie</li>
          </div>

          <div className="footer-menu">
            <li className="uppercase">Legal</li>
            <li>Terms of Use</li>
            <li>API Terms of Use</li>
            <li>Privacy Policy</li>
          </div>

          <div className="footer-menu">
            <li className="uppercase">Contact</li>
            <li>Email Us</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </div>

        </ul>

      </div>
      <p>&copy; {year} Movie Corp.</p>
    </footer>
  );
}

export default Footer;
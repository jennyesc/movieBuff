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
  
      </div>
      
          <div className="footer-menu-container">
            
         
              <div className="footer-menu colOne">
                <ul>
                  <li className="uppercase">About</li>
                  <li>About TMD</li>
                  <li>Support Forums</li>
                  <li> API</li>
                </ul>
              </div>
          
              <div className="footer-menu colTwo">
                <ul>
                  <li className="uppercase">Community</li>
                  <li>Guidelines</li>
                  <li>Discussions</li>
                  <li>Leaderboard</li>
                </ul>
              </div>  
        
              <div className="footer-menu colThree">
                <ul>
                  <li className="uppercase">Contribute</li>
                  <li>Get Involved FAQ</li>
                  <li>3rd Party Applications</li>
                  <li>Add New Movie</li>
                </ul>
              </div>

              <div className="footer-menu colFour">
                <ul>
                  <li className="uppercase">Legal</li>
                  <li>Terms of Use</li>
                  <li>API Terms of Use</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>

              <div className="footer-menu colFive">
                <ul>
                  <li className="uppercase">Contact</li>
                  <li>Email Us</li>
                  <li>Twitter</li>
                  <li>Facebook</li>
                </ul>
              </div>
           
          </div>
        

     
      <p>&copy; {year} Movie Corp. <span className="footer-break"><br /></span> 
      <span>For educational purposes only</span><span className="footer-break"><br /></span> 
      <span>Created by Jenny Escobell and Gaia Santoro</span></p>
    </footer>
  );
}

export default Footer;
import './Footer.css'
import logo from '../assets/logo.png';
import whatsapp from '../assets/whatsapp.png'
import insta from '../assets/insta.png'
import twitter from '../assets/xlogo.png'

function Footer(){
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={logo} alt="footer-logo"/>
                <p>Fashion Republic</p>
            </div>
            <div>
                <ul className="footer-links">
                    <li>Company</li>
                    <li>Products</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="icons">
                <div className="icons-container">
                    <img src={whatsapp} alt="" />
                </div>

                <div className="icons-container">
                    <img src={insta} alt="" />
                </div>

                <div className="icons-container">
                    <img src={twitter} alt="" />
                </div>     
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @ 2025 All Rights Reserved</p>
            </div>
        </div>
    );
}
export default Footer
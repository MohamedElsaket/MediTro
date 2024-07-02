import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from '../../assets/logo.png'
import banner from '../../assets/istockphoto-1398788867-170667a.jpg'
import './Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section className="footer position-relative pt-5 pb-5">
            <img src={banner} alt="" className="banner" />
            <div className="container">
                <div className="row">
                    <div className="logo col-sm-12 col-md-6 col-lg-3">
                        <Link to="/Meditro"><img src={logo} alt="logo" /></Link>
                        <p className="lorem">
                        Lorem ipsum is dolor sit amet, csectetur adipiscing elit, 
                        dolore smod tempor incididunt ut labore et. 
                        </p>
                        <div>
                            <p className="p p-0">Contact Us</p>
                            <FontAwesomeIcon className="phone-icon" icon={faPhone} />
                            <span>+01 123 465 7890</span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <h3 className="p-0 m-0">Quick Links</h3>
                        <ul>
                            <li><Link to="about">About Us</Link></li>
                            <li><Link to="team">Our Team</Link></li>
                            <li><Link to="faq">Faq's</Link></li>
                            <li><Link to="booking">Booking</Link></li>
                            <li><Link to="services">Services</Link></li>
                            <li><Link to="blogs">Blogs</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <h3 className="p-0 m-0">Our Service</h3>
                        <ul>
                            <li><a href="#">Dental Care</a></li>
                            <li><a href="#">Cardiac Clinic</a></li>
                            <li><a href="#">Massege Therapy</a></li>
                            <li><a href="#">Cardiology</a></li>
                            <li><a href="#">Precise Diagnosis</a></li>
                            <li><a href="#">Ambulance Services</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <h3>Subscribe</h3>
                        <input type="text" placeholder="Email Address" />
                        <button className="main-btn">Subscribe Now</button>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Footer;

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>We are a team of passionate individuals dedicated to providing the best service for our customers.</p>
      <div className="social-links">
        <a href="https://www.facebook.com"><FaFacebook /></a>
        <a href="https://www.twitter.com"><FaTwitter /></a>
        <a href="https://www.instagram.com"><FaInstagram /></a>
      </div>
    </div>
  );
};

export default AboutUs;
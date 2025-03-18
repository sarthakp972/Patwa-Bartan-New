import React from "react";
import "../Css-page/Footer.css";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Help Section */}
        <div className="footer-section">
          <h4>Help</h4>
          <ul>
            <li><a href="#">Brass Care</a></li>
            <li><a href="#">Kansa Care</a></li>
            <li><a href="#">Copper Care</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Return/Exchange Request</a></li>
          </ul>
        </div>

        {/* Know More Section */}
        <div className="footer-section">
          <h4>Know More</h4>
          <ul>
            <li><a href="#">About P-TAL</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Become an Affiliate</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Retail Stores</a></li>
            <li><a href="#">Corporate Gifting</a></li>
          </ul>
        </div>

        {/* Email Subscription & Social Media */}
        <div className="footer-section">
          <h4>Join our email list</h4>
          <p>Be the first to hear about our latest promotions, new products, and more.</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter email" />
            <button>Subscribe</button>
          </div>

          {/* Social Media Links */}
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaPinterest /></a>
          </div>
        </div>
      </div>

      {/* Business Details */}
      <div className="footer-bottom">
        <div className="company-info">
          <img src="/logo.png" alt="Company Logo" className="footer-logo" />
          <p>GSTIN: XXXXXXXX</p>
          <p>Address: Your Shop Address, City, State, PIN</p>
          <p>Owner: Your Name</p>
          <p>Mobile: 1234567890, 9876543210</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

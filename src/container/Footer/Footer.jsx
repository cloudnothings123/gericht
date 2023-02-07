import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { FooterOverlay, Newsletter } from '../../components'
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Domkloster 4, 50667 Köln, Germany</p>
        <p className="p__opensans">+49 06382 87 29 40 </p>
        <p className="p__opensans">info@gericht.com</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">The best way to find yourself is to lose yourself in the service of others</p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Saturday</p>
        <p className="p__opensans">4PM to 10PM</p>
        <p className="p__opensans">Sunday</p>
        <p className="p__opensans">Closed</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 Gericht. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;

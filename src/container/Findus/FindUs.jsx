import React from 'react';
import { images } from '../../constants'
import { SubHeading } from '../../components'

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Domkloster 4, 50667 Köln, Germany</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0'}}>Opening Hours</p>
        <p className="p_opensans" style={{ color: 'white' }}>Mon-Sat 4PM - 10PM</p>
        <p className="p_opensans" style={{ color: 'white' }}>Closed on Sundays</p>
      </div>
      <button className="custom__button" style={{ marginTop: '2rem' }}>Vist Us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;

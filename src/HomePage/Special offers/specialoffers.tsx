// ImageWithTextPage.tsx
import React from 'react';
import './specialoffers.css'; // Import the CSS file
import coupleImage from '../assets/couple.jpg'
import goa from '../assets/goa.jpg';
import adventure from '../assets/adventure.jpg'

const SpecialOffers: React.FC = () => {
  return (
    <div className="containerof">
      {/* Left side with image view */}
      

      {/* Right side with rows of texts */}
      <div className="left-sid">
        {/* First row */}
       
        <h3>Day Out Holydays</h3>
        <h1>Special Offers</h1>
        <div className="text-row">
  
  
        <div className="text-row">

  <div className="column">

    <div className="text-element">
    <img src={goa} className="profile-image" />
    <div className="text-row">
          <div className="text-elementBlue">Start From: ₹3599</div>
          <div className="text-elementOrange">Goa College Package</div>
          <div className="text-element">Our packages are different unique in goa make use of our packages in special offers.</div>
        </div>
  </div>
</div>


        {/* Second row */}
        <div className="column">

<div className="text-element">
<img src={adventure} className="profile-image" />
<div className="text-row">
      <div className="text-elementBlue">Start From: ₹400</div>
      <div className="text-elementOrange">Adventure Activities</div>
      <div className="text-element">Our activities are specific and unique to explore with goacalling Make use of our best offers.</div>
    </div>
</div>
</div>

        {/* Third row */}
        <div className="column">

<div className="text-element">
<img src={coupleImage} className="profile-image" />
<div className="text-row">
      <div className="text-elementBlue">Start From: ₹9,999</div>
      <div className="text-elementOrange">Couple Package</div>
      <div className="text-element">Our packages are different unique in goa make use of our packages in special offers.</div>
    </div>
</div>
</div>

        {/* ... (additional rows as needed) */}
      </div>
      </div>
      </div>
      <div className="right-side">
        <img
          src={process.env.PUBLIC_URL + 'specialOffers.png'}
          alt="Sample"
          className="image-view"
        />
      </div>
      </div>
  );
};

export default SpecialOffers;

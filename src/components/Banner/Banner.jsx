import React from 'react'
import Arrow from '../../assets/images/svg/Arrow';
 import banner from '../../assets/images/banner copy.png'
import './banner.css';

const Banner = () => {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow> 
          </div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>Motorcy...</span>
            <span>Mobile Ph...</span>
            <span>For Sale:Houses & Apart...</span>
            <span>Scoot...</span>
            <span>Commercial & Other Ve...</span>
            <span>For Rent: House & Apart...</span>
          </div>
        </div>
        <div className="banner">
          <img
            src={banner}
            alt="banner"
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner

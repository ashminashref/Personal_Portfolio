// Appbar.js (Corrected)
import React from 'react';
import { Container } from 'react-bootstrap';
import './Appbar.css'; // Make sure this file exists
import NavModal from './NavModal';

function Appbar() {
  return (
    // 1. Apply fixed-top to the *outer* full-width wrapper
    <div className='fixed-top appbar-wrapper'> 
      {/* 2. Place the Container *inside* to align your content */}
      <Container className='text-white'>
        {/* 3. Removed p-5, just using pt-4 for top padding */}
        <div className='d-flex align-items-center justify-content-between pt-4'>
          <div className="logo">
            <h4>ash.</h4>
          </div>
          <div className="navbar rounded-pill">
            <ul className='nav-ul'>
              <li className='nav-li'>Home</li>
              <li className='nav-li'>About</li>
              <li className='nav-li'>Work</li>
              <li className='nav-li'>More</li>
              <li className='nav-li'>
                <button className='call-btn rounded-pill'>Book a call</button>
              </li>
            </ul>
          </div>
          <div className="command">
            <NavModal />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Appbar;

import React from 'react';
import { Container } from 'react-bootstrap';
import './Appbar.css'; 
import NavModal from './NavModal';

function Appbar() {
  return (
    <div className='fixed-top appbar-wrapper'> 
      <Container className='text-white'>
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
                <a href="https://cal.com/ashmin-ashraf">
                <button className='call-btn rounded-pill'>Book a call</button>

                </a>
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

import React from 'react';
import { Container } from 'react-bootstrap';
import './Appbar.css'; 
import NavModal from './NavModal';
import { Link } from 'react-router-dom';

function Appbar() {
  return (
    <div className='fixed-top appbar-wrapper'> 
      <Container className='text-white'>
        <div className='d-flex align-items-center justify-content-between pt-4'>
          <div className="logo">
            <h4><Link to = '/'>ash.</Link></h4>
          </div>
          <div className="navbar rounded-pill">
            <ul className='nav-ul'>
               <li className='nav-li'><Link to = '/'>Home</Link></li>
              <li className='nav-li'><Link to = '/about'>About</Link></li>
              <li className='nav-li'><Link to = '/project'>Work</Link></li>

              <a href="/Resume/ASHMINASHRAF.pdf"
              target='_blank'
              rel='noopener noreferrer'
              >
                            <li className='nav-li'>Resume</li>

              </a>
              <li className='nav-li'>
                <a href="https://cal.com/ashmin-ashraf/schedule-meeting">
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
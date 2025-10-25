import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import './Footer.css'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
  return (
    <div>
        <Container className = 'mt-5 pt-5 mb-5 '>
            
            <h1 className='text-lg-center text-white text-uppercase mb-4 mt-5 pt-5'>from concept to <span className='gradient-txt'>craetion</span><br />let's make it <span className='gradient-txt'>happen!</span></h1>
            <div className='d-flex justify-content-lg-center mb-5 mt-5'>
  <button className='connect-btn rounded-pill text-white'>
              Let's Connect
              <div className='round d-flex align-items-center justify-content-center'>
                <ArrowForwardOutlinedIcon className='arrow-icon' />
              </div>
            </button>
            </div>
            <h3 className='text-lg-center text-white footer-h3'>I'm available for full-time roles & freelance projects.

</h3>
            <p className=' text-lg-center mb-5 pb-5 footer-p'>I thrive on crafting dynamic web applications, and <br />
delivering seamless user experiences.</p>

<hr style={{border:'0.5px solid #323131ff'}} className='mb-5'/>
             
       <Row className='gy-5 mb-5 mt-5 pb-5'>
        <Col lg = {6}>
        <a href=""><h5 className='footer-h5'>ash.</h5></a>
        <h6 className='w-50 footer-h6'>I'm Ashmin - a full stack developer, freelancer & problem solver. Thanks for checking out!</h6>
        </Col>
        
        <Col lg = {2} >
        <ul className='footer-ul'>
            <h6 className='footer-heading'>Genral</h6>
            <li className='footer-li'><a href="">Home</a></li>
            <li className='footer-li'><a href="">About</a></li>
            <li className='footer-li'><a href="">Projects</a></li>
            <li className='footer-li'><a href="">Blog</a></li>
        </ul>
        </Col>
        <Col lg = {2} >
        <ul className='footer-ul'>
            <h6 className='footer-heading'>Specifics</h6>
            <li className='footer-li'><a href="">Guest Book</a></li>
            <li className='footer-li'><a href="">Bucket List</a></li>
            <li className='footer-li'><a href="">Attribution</a></li>
            <li className='footer-li'><a href="">Uses</a></li>
        </ul>
        </Col>
        <Col lg = {2} className=' align-items-end d-flex'>
        <ul className='footer-ul'>
            <h6 className='footer-heading'>More</h6>
            <li className='footer-li'><a href="">Book a call</a></li>
            <li className='footer-li'><a href="">Links</a></li>
        </ul>
        </Col>
       </Row>

       <Row className='gy-4'>
        <Col lg = {6}>
        <p className='footer-copy m-0 p-0'>2025 - 26 Ashmin Ashraf. All rights reserved</p>
        </Col>
        <Col lg = {6} className='d-flex  align-items-center justify-content-lg-center gap-5 '>
        <a href="https://github.com/ashminashref"><GitHubIcon className='social-ico'/></a>
        <a href=""><LinkedInIcon className='social-ico'/></a>
        <a href="https://x.com/AshminAshref"><XIcon className='social-ico'/></a>
        <a href="https://www.instagram.com/ashm11n/"><InstagramIcon className='social-ico'/></a>
        </Col>
       </Row>
        </Container>
    </div>
  )
}

export default Footer
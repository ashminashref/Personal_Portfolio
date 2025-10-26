import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

function About() {
  return (
    <div>
      <Container className="mt-5 pt-5  pb-5">
        <Row className="mb-5 pb-5">
          <Col lg={6}>
            <h6 className="about-h6">Know about me</h6>
            <h1 className="gradient-txt about-h1" style={{ fontSize: "60px" }}>
              Full-Stack Developer and <br /> a little bit of everything
            </h1>
            <p className="about-p m-0 p-0">
              I'm Ashmin Ashraf, a passionate full-stack developer dedicated to
              building engaging and scalable web solutions. From crafting
              intuitive frontends to developing efficient backends, I enjoy
              turning complex challenges into elegant, functional code. <br /><br /> My skill
              set includes React, Django, and Python, and I’m constantly
              exploring new technologies to stay ahead. Beyond coding, I’m
              driven by curiosity—always learning, experimenting, and finding
              inspiration in new ideas. <br /><br /> I believe every day is an opportunity to
              grow, create, and make a meaningful impact.
               < div className='d-flex  mt-5 gap-5'>
        <a href="https://github.com/ashminashref"><GitHubIcon className='social-ico'/></a>
        <a href=""><LinkedInIcon className='social-ico'/></a>
        <a href="https://x.com/AshminAshref"><XIcon className='social-ico'/></a>
        <a href="https://www.instagram.com/ashm11n/"><InstagramIcon className='social-ico'/></a>
        </div>
            </p>
          </Col>
          <Col lg = {6}>
          {/* <img src="/Img/character.png" alt="man smiling" /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;

import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
// import {gsap} from 'gsap'
import './Project.css'
function Projects() {
  return (
    <div>
        <Container className='text-lg-center'>
            <h6 className='text-uppercase project-h6'>Project</h6>
            <h1 className='gradient-txt'>Curated work</h1>

            <Row className='mt-5 gy-5'>
                <Col lg = {8}>
                <div className='image-container  d-flex flex-column p-3 justify-content-between'>
                    <h4 className='text-lg-start fw-bold gradient-txt'>Weaver is an online css generator,<br /> from user input</h4>
                    <img src="/Img/screen1.avif" alt="" className='img-fluid w-100'/>
                </div>
                </Col>
                <Col lg = {4} className='text-start '>
                <h3>Next Ventures</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur obcaecati doloribus nostrum tempore aliquid harum voluptatem rem molestiae praesentium blanditiis.</p>
                <ul>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, qui!</li>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, qui!</li>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, qui!</li>
                </ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Projects
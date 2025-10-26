import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Experience.css';
import { expData } from '../Data/Experience/Experience';

function Experience() {
  return (
    <div>
      <Container className='text-lg-center text-white'>
        <h6 className='text-uppercase exp-h6-1'>the experience</h6>
        <h1 className='gradient-txt exp-h1-1'>
          Experience That <br /> Brings Ideas To Life
        </h1>

        {expData.map((item, index) => (
          <Row
            key={index}
            className='text-start mt-5 pt-5 d-flex  justify-content-center'
          >
            <Col lg={6}>
              <h6 className='exp-h6'>{item.date}</h6>
              <h5 className='exp-h5'>{item.company}</h5>
              <h6 className='exp-h6'>{item.place}</h6>
              <p className='exp-h6'>{item.type}</p>
            </Col>

            <Col lg={6}>
              <h2 className='exp-h4 '>{item.role}</h2>
              <p>{item.desc}</p>
              <ul className='exp-ul p-0 m-0'>
                {item.points?.map((point, i) => (
                  <li key={i} className='exp-li'>{point}</li>
                ))}
              </ul>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default Experience;

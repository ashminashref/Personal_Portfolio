import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// styling
import './Project.css'

// MUI
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
// import project data
import { sectionsData } from '../Data/Project/Project';

function Projects() {
  return (
    <div>
        <Container className='text-lg-center'>
            <h6 className='text-uppercase project-h6'>Project</h6>
            <h1 className='gradient-txt'>Curated work</h1>

            <Row className='mt-lg-5 gy-5'>
                {sectionsData.map((data, index) => (
                    <Row key={index} className='gy-5'>
                        <Col lg={8}>
                            <div className='image-container d-flex flex-column p-3 justify-content-between'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <h4 className='text-lg-start text-white w-75'>{data.subtitle}</h4>
                                    <a href={data.link}>
                                                                            <ArrowOutwardIcon className='arrow' />
                                    </a>
                                </div>
                                <img src={data.imageUrl} alt="" className='img-fluid w-100'/>
                            </div>
                        </Col>
                        <Col lg={4} className='text-start'>
                            <h3 className='gradient-txt fs-1'>{data.title}</h3>
                            <p className='text-white desc'>{data.description}</p>
                             <ul >
                            {data.features?.map((item,index)=> (
                                

                                <li className='project-li text-white' key={index}><AutoAwesomeOutlinedIcon  sx={{marginRight:'5px',color:'white'}}/> {item}</li>

                            
                            ))}
                           </ul>
                        </Col>
                    </Row>
                ))}
            </Row>
        </Container>
    </div>
  )
}

export default Projects
import React from 'react'
import { Container } from 'react-bootstrap'
import { toolBox } from '../Data/Skills/Skills'
import './Skills.css'
function Skills() {
  return (
    <div>
        <Container className='text-lg-center mt-5 pt-5'>
            <h6 className='skill-h6-1'>My skills</h6>
            <h1 className='gradient-txt ' style={{fontSize:'60px'}}>The Secret Sauce</h1>
            <ul className='skill-ul justify-content-lg-center m-0 p-0 mt-5'>
                {toolBox.map((item, index)=>(
                    <li key={index}><img src= {item.url} alt="skills" className='skill-li '/></li>
                ))}
            </ul>
        </Container>
    </div>
  )
}

export default Skills
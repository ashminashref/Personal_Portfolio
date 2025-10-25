import React from 'react'
import './Tech.css'
import { Container } from 'react-bootstrap'
function Tech() {
  return (
    <div className='mt-5 pt-5'> 
    <Container className='text-lg-center mt-5 pt-5'>

        <h1 className='gradient-txt'>Passionate about cutting-edge technologies</h1>
         <div class="container py-5" >
      <div class="position-relative overflow-hidden box-skill rounded-4 px-3 py-4 box-skill">

        <div className="position-absolute top-0 start-0 h-100 blur-1"
          >
        </div>

        <div className="position-absolute top-0 end-0 h-100 blur-2">
        </div>

             <div className="marquee-track">
             <div className="d-inline-flex gap-4 flex-nowrap text-nowrap">
            <span className="text-white">HTML</span>
            <span className="text-white">CSS</span>
            <span className="text-white">JavaScript</span>
            <span className="text-white">Bootstrap</span>
            <span className="text-white">TailwindCss</span>
            <span className="text-white">ReactJs</span>
            <span className="text-white">Python</span>
            <span className="text-white">Django</span>
            <span className="text-white">Flask</span>
            <span className="text-white">Rest API's</span>
            <span className="text-white">AWS</span>
                        <span className="text-white">GSAP</span>

            <span className="text-white">HTML/</span>

          </div>

             <div className="d-inline-flex gap-4 flex-nowrap text-nowrap ">
            <span className="text-white">CSS</span>
            <span className="text-white">JavaScript</span>
            <span className="text-white">Bootstrap</span>
            <span className="text-white">TailwindCss</span>
            <span className="text-white">ReactJs</span>
            <span className="text-white">Python</span>
            <span className="text-white">Django</span>
            <span className="text-white">Flask</span>
            <span className="text-white">Rest API's</span>
            <span className="text-white">AWS</span>
                        <span className="text-white">GSAP</span>

            <span className="text-white">MySQL</span>
          </div>Name
        </div>

      </div>
    </div>
    </Container>
    </div>
  )
}

export default Tech
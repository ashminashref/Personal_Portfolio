import React from 'react'
import Appbar from '../SharedComponents/Appbar'
import Projects from '../Components/Home/Projects'
import Footer from '../SharedComponents/Footer'

function ProjectSep() {
  return (
    <div className='mt-5 pt-5'>
        <div className='mt-5 pt-5'>
        <Appbar/>

        </div>
        <Projects/>
        <Footer/>
        
    </div>
  )
}

export default ProjectSep
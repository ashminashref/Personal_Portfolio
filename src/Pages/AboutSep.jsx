import React from 'react'
import Appbar from '../SharedComponents/Appbar'
import Footer from '../SharedComponents/Footer'
import About from '../Components/Home/About'
import Experience from '../Components/About/Experience'

function AboutSep() {
  return (
    <div>
      <Appbar/>
      <div className='mt-5 pt-5'>
      <About />
<Experience/>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutSep
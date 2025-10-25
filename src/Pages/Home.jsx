import React from 'react'
import Appbar from '../SharedComponents/Appbar'
import Homehero from '../Components/Home/Homehero'
import './Home.css'
import Tech from '../Components/Home/Tech'
import Projects from '../Components/Home/Projects'
function Home() {
  return (
    <div className='holder'>
         <Appbar/>
         <Homehero/>
         <Tech/>
         <Projects/>
    </div>
  )
}

export default Home
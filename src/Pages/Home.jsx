import React from 'react'
import Appbar from '../SharedComponents/Appbar'
import Homehero from '../Components/Home/Homehero'
import './Home.css'
import Tech from '../Components/Home/Tech'
function Home() {
  return (
    <div className='holder'>
         <Appbar/>
         <Homehero/>
         <Tech/>
    </div>
  )
}

export default Home
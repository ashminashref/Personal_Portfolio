import React from 'react'
import Appbar from '../SharedComponents/Appbar'
import Homehero from '../Components/Home/Homehero'
import './Home.css'
function Home() {
  return (
    <div className='holder'>
         <Appbar/>
         <Homehero/>
    </div>
  )
}

export default Home
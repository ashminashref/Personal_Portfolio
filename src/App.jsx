import './App.css'
import {Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import AboutSep from './Pages/AboutSep'
function App() {

  return (
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path = 'about' element = {<AboutSep/>}/>
      </Routes>
    
  )
}

export default App

import './App.css'
import {Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import AboutSep from './Pages/AboutSep'
import ProjectSep from './Pages/ProjectSep'
function App() {

  return (
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path = 'about' element = {<AboutSep/>}/>
        <Route path = 'project' element = {<ProjectSep/>}/>
      </Routes>
    
  )
}

export default App

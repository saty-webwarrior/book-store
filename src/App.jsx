import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Courses from '../src/courses/Courses'
import Homep from '../src/landingpage/Homep'
import Signup from '../src/Components/Signup'
function App() {
  return (
  <>
  <div className='dark:bg-slate-900'>
  <Routes>
  <Route path="/" element={<Homep />}/>
  <Route path="/courses" element={<Courses />}/>
  <Route path="/signup" element={<Signup />}/>
  </Routes>
  </div>
  </>  
    
  
  )
}

export default App
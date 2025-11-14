import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Work from './pages/Work'
import Process from './pages/Process'
import About from './pages/About'
import Careers from './pages/Careers'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/process' element={<Process/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
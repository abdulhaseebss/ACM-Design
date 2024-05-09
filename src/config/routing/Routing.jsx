import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../screens/home/Home'
import About from '../../screens/about/About'
import Contact from '../../screens/contact/Contact'
import Services from '../../screens/services/Services'

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/services' element={<Services/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing
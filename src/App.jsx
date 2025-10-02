import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import "@fontsource/space-grotesk/400.css"; 
import "@fontsource/space-grotesk/500.css"; 
import "@fontsource/space-grotesk/600.css"; 
import "@fontsource/space-grotesk/700.css"; 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Home />}/>
        <Route path = '/about' element={<About />}/>
        <Route path = '/service' element={<Service />}/>
        <Route path = '/blog' element={<Blog />}/>
        <Route path = '/contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
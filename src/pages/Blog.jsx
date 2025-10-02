import React from 'react'
import Navbar from '../components/homeSection/Navbar'
import BlogSection1 from '../components/blogSection/BlogSection1'
import BlogSection2 from '../components/blogSection/BlogSection2'
import Footer from '../components/homeSection/Footer'


const Blog = () => {
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <BlogSection1/>
        <BlogSection2 />
        <Footer />
        
         
    </div>
  )
}

export default Blog
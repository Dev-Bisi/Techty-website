import React from 'react'
import Navbar from '../components/homeSection/Navbar'
import ContactUs from '../components/contactSection/ContactUs'
import Footer from '../components/homeSection/Footer'

const Contact = () => {
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Contact
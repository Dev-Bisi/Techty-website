import React from 'react'
import Navbar from '../components/homeSection/Navbar'
import Provide from '../components/serviceSection/Provide'
import Empower from '../components/serviceSection/Empower'
import Pricing from '../components/serviceSection/Pricing'
import Footer from '../components/homeSection/Footer'



const Service = () => {
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <Provide/>
        <Empower/>
        <Pricing/>
        <Footer/>
    </div>
  )
}

export default Service
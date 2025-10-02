import React from 'react'
import Navbar from '../components/homeSection/Navbar'
import Hero from '../components/homeSection/Hero'
import Product from '../components/homeSection/Product'
import Business from '../components/homeSection/Business'
import Here from '../components/homeSection/Here'
import Footer from '../components/homeSection/Footer'
import DataFetch from '../components/homeSection/DataFetch'


const Home = () => {
  return (
    <div className='flex flex-col'>
        <Navbar />
        <Hero />
        <Product />
        <Business />
        <DataFetch/>
        <Here />
        <Footer />  
    </div>
  )
}

export default Home
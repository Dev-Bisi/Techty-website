import React from 'react'
import Navbar from '../components/homeSection/Navbar'
import DataFetch from '../components/homeSection/DataFetch'
import Sections1 from '../components/aboutSection/Sections1'
import Section2 from '../components/aboutSection/Section2'
import TeamSection from '../components/aboutSection/TeamSection'
import Footer from '../components/homeSection/Footer'

const About = () => {
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <Sections1/>
        <Section2/>
        <TeamSection/>
        <Footer/>
    </div>
  )
}

export default About
import React from 'react'
import './courses.css'
import AdditionalDiploma from './AdditionalDiploma'
import Navbar from '../../Components/Navbar.jsx'
import Header from '../../Components/Header.jsx'
import Footer from '../../Components/Footer.jsx'

export default function Bba() {
  return (
    <>
    <Header />
    <Navbar />
    <div className='courses'>

        <img src='' alt="cant load" data-aos="fade-up" />
        <h1>BACHELORS OF BUSINESS ADMINISTRATION</h1>
        <p>
        The Guru Gobind Singh Indraprastha University-affiliated Sri Guru Teg Bahadur 
        Institute of management and information technology (SGTBIMIT) provides a 3-year
        full-time bachelor's degree in business administration (BBA). This is planned 
        and organised to give young brains a learning atmosphere that is intellectually 
        challenging. Students who complete the course will have a fundamental understanding 
        of both international business and management ideas. The aim of this program at 
        SGTBITMIT is to create outstanding professionals who can use theory in the workplace 
        and are able to recognize and resolve management issues on both a local and global 
        scale. The method of instruction is more pragmatic, and knowledge is transferred for 
        use in the business sector.
        With a focus on industrial exposure, this undergraduate curriculum gives students a 
        broad understanding of management theory. The curriculum for the course was created 
        following a thorough analysis of the needs of all stakeholders and the constantly 
        shifting requirements of the sector. The key components of the programme place a 
        focus on developing students' soft skills and maximising the interface with industry 
        through a variety of initiatives. Using a credit-based system, the curriculum also 
        provides enormous flexibility and learning opportunities. SGTBIMIT adheres to GGSIPU 
        guidelines for exam administration and result announcement, both of which are entirely 
        at the university's discretion.
        Lectures, case studies, role-plays, and integrative exercises are all included in the 
        adaptable curriculum. The goal of BBA instruction is to help students develop their 
        problem-solving skills in relation to various business-related issues. Students are 
        given a platform to familiarise themselves with the rapidly evolving global business environment.
        </p>
        <AdditionalDiploma />
    </div>
    <Footer />
    </>
  )
}

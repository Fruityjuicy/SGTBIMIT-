import React from 'react'
import AOS from 'aos'
import Home from './Home/Home.jsx'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles.css'
import AdminisCarousel from './GoverningBody/AdminisCarousel.jsx'
import About from './About/About'
import Vision from './Vision/Vision'
import DirectorReadMore from './DirectorReadMore/DirectorReadMore'
import Divinity from './Society/pages/Divinity'
import SmartYouth from './Society/pages/SmartYouth'
import Literary from './Society/pages/Literary'
import Nss from './Society/pages/Nss'
import Footer from './Components/Footer'
import Fineart from './Society/pages/Fineart'
import Cultural from './Society/pages/Cultural'
import Soch from './Society/pages/Soch'
import Saarang from './Society/pages/Saarang'
import Eco from './Society/pages/Eco'
import SwachhBharat from './Society/pages/SwachhBharat' 
import Faculty from './Faculty/Faculty'
import EResources from './EResources/EResources.jsx'
import Fees from './Fees/Fees'
import Admin from "../src/Admin/Admin"
import Testimonials_ADD from './Pages/Testimonials/Testimonials_ADD/Testimonials_ADD.jsx'
import Testimonial_Display from './Pages/Testimonials/Testimonials_Display/Testimonial_Display.jsx'
import Society_Add from "../src/Pages/Society/Society_Add/Society_Add"
import Society_Display from './Pages/Society/Society_Display/Society_Display.jsx'
import Eligibility from './Course-Eligibility/Eligibility.jsx'
import Notice from './Notices/Notices.jsx'
function App() {
  AOS.init({
    startEvent: 'load'
  })
  return (
    <Router>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />} />
        <Route path='about/governing-body' element={<AdminisCarousel />} />
        <Route path="about/vision-and-mission" element={<Vision />} />
        <Route path="director-readmore" element={<DirectorReadMore />} />
        <Route path="society/divinity" element={<Divinity />} />
        <Route path="society/smart-youth" element={<SmartYouth />} />
        <Route path="society/literary" element={<Literary />} />
        <Route path="society/nss-cell" element={<Nss />} />
        <Route path="society/fine-art" element={<Fineart />} />
        <Route path="society/cultural" element={<Cultural />}/>
        <Route path="society/soch" element={<Soch />}/>
        <Route path="society/saarang" element={<Saarang />}/>
        <Route path="society/eco-club" element={<Eco />}/>
        <Route path='society/swachh-bharat' element={<SwachhBharat />}/>
        <Route path='academics/faculty' element={<Faculty />}/>
        <Route path='academics/e-resources' element={<EResources />}/>
        <Route path='admission/fees' element = {<Fees />}/>
        <Route path='admission/courses-eligibility' element = {<Eligibility />}/>
        <Route path='admission/notices' element = {<Notice />}/>
        <Route path='/admin' element = {<Admin/>}/>
        <Route path='/admin/Testimonials_Add' element = {<Testimonials_ADD/>}/>
        <Route path='/admin/Testimonials_Display' element = {<Testimonial_Display/>}/>
        <Route path='/admin/Society_Add' element = {<Society_Add/>}/>
        <Route path='/admin/Society_Display' element = {<Society_Display/>}/>
        </Routes>
    </Router>
  );
}

export default App;

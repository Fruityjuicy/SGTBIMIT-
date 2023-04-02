import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './home.css'
import Welcome from './Welcome'
import ImageCarousel from './ImageCarousel'
import Testimonials from './Testimonials'
import DirectorMsg from './DirectorMsg'
import Placements from './Placements'
import Collaboration from './Collaboration'
import Recruiters from './Recruiters'
import Map from './Map'
import Admission from '../Components/Admission'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Loader2 from '../Components/Loader2'
export default function Home() {

  const [isPending, setIsPending] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setIsPending(false)
  }, 1000)
  },[])

  return (
    
      <>
      {isPending && <Loader2/>}
      <Header />
      <Navbar />
      <ImageCarousel />
      <Welcome />
      <Testimonials />
      <DirectorMsg />
      <Placements />
      <Collaboration />
      <Recruiters />
      <Map />
      <Admission /> 
      <Footer />
    </>
    
  )
}

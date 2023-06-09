import React, { useState } from 'react'
import './gallery.css'
import { Header, Navbar, Footer, Loader } from '../../Components'
import { Carousel } from 'react-responsive-carousel'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'

export default function Gallery() {
    const [isCarouselActive, setIsCarouselActive] = useState(false)
    return (
        <>
            <Helmet title='SGTBIMIT | Alumini Gallery' />
            <Header />
            <Navbar />
            <section className='gallery-section'>
                <div className="head1">GALLERY</div>
                <div className="gallery-box">
                    {[...Array(9)].map((x, i) => (
                        <>
                            {!isCarouselActive && <div className="gallery-box1" onClick={() => { setIsCarouselActive(true) }}>
                                <img src={require("../../images/p1.jpg")} alt="infra" className="pic" />
                                <p className="text">Infra</p>
                            </div>}
                            {isCarouselActive && (
                                <motion.section
                                    className="gallery-carousel-section"
                                    initial={{
                                        scale: 0,
                                    }}
                                    animate={{
                                        scale: 1,
                                    }}
                                >
                                    <div className="gallery-carousel-container">
                                        <img src={require("../../images/cancel.png")} className="carousel-close-btn" onClick={() => setIsCarouselActive(false)} />
                                        <Carousel>
                                            {[...Array(6)].map((x, i) => (
                                                <div className="gallery-carousel-item">
                                                    <img src={require("../../images/p1.jpg")} alt="infra" />
                                                </div>
                                            ))}
                                        </Carousel>
                                    </div>
                                </motion.section>
                            )}
                        </>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    )
}

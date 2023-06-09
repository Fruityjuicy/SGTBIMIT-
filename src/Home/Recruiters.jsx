import React, { useEffect, useState, useRef } from 'react'
import useFetch from '../useFetch'
import Loader from '../Components/Loader'
import { Carousel } from 'react-responsive-carousel'
import { CustomArrow, CustomArrowNotActive } from '../Components/Carousel'
import { motion } from 'framer-motion'
/* import useIntersection from '../useIntersection' */

export default function Recruiters() {
  const carouselRef = useRef(null)

  /*   const isVisible = useIntersection(carouselRef, '0px') */


  const { data: recruiters, isPending } = useFetch("http://localhost:5000/Recruiters/recruiters_Display")


  let recruitersChunks = []
  let i = 0
  const count = 4
  recruiters && (

    recruiters.forEach(() => {
      let res = recruiters.slice(i, i + count)
      if (res.length === 0) return
      recruitersChunks.push(res)
      i = i + count
    })

  )
  const [currentS, setCurrentS] = useState(0)
  const total = recruiters ? recruitersChunks.length : 0
  const handleSlideChange = (index) => {
    setCurrentS(index)
  }
  return (
    <section className='recruiters'>
      <motion.h1
        initial={{
          x: 400
        }}
        whileInView={{
          x: 0
        }}
        transition={{
          duration: 0.5,
          type: 'spring'
        }}
      >
        Our Recruiters.
      </motion.h1>
      <motion.div
        className="recruiters-container"
        ref={carouselRef}
        initial={{
          x: -400
        }}
        whileInView={{
          x: 0
        }}
        transition={{
          duration: 0.5,
          type: 'spring'
        }}
      >

        {isPending && <Loader />}

        {recruiters &&
          <Carousel

            onChange={handleSlideChange}
            transitionTime={1000}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            autoPlay={recruiters ? true : false}
            infiniteLoop={true}
            selectedItem={0}
            renderArrowNext={(onClickHandler, hasNext, label) => (
              <>
                {hasNext && (
                  <CustomArrow direction={"right"} onClick={onClickHandler} />
                )}
                {!hasNext && (
                  <CustomArrowNotActive direction={"right"} />
                )}
              </>
            )}
            renderArrowPrev={(onClickHandler, hasPrev, label) => (
              <>
                {hasPrev && (
                  <CustomArrow direction={"left"} onClick={onClickHandler} />
                )}
                {!hasPrev && (
                  <CustomArrowNotActive direction={"left"} />
                )}
              </>
            )}
          >
            {recruitersChunks.map((recruiters, i) => {
              return (
                <div className="recruiters-item" key={`rec-item-${i}`}>
                  {recruiters.map((recruiter, i) => {
                    return (
                      <div className="recruiter-img" key={`rec-img-${i}`}>
                        <img src={`http://localhost:5000/Recruiters/Recruiter_Image_Display/${recruiter._id}`} key={recruiter._id} alt="cant load" />

                      </div>
                    )
                  })}
                </div>
              )
            })}
          </Carousel>
        }
        <div className="custom-status">
          {currentS + 1} / {total}
        </div>
        <div className="bottom-border"></div>

      </motion.div>
    </section>
  )
}

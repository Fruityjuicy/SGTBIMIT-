import React, { useEffect, useRef } from 'react'
import Loader from '../Components/Loader'
import useFetch from '../useFetch'
import { motion } from 'framer-motion'


export default function Placements() {
  const scrollRef = useRef(null)
  const handleClick = (e) => {
    scrollRef.current.scrollLeft += 400
  }

  const { data: placementArray, isPending } = useFetch("http://localhost:5000/Placement_Intership/PlacementInterships_Display")

  useEffect(() => {
    scrollRef.current.scrollLeft = 0
  }, [placementArray])

  return (

    <section className='placements'>
      <div className="placements-container">
        <motion.h1
          initial={{
            opacity: 0,
            x: 400,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
            type: "spring"
          }}
        >
          Placements and Internships.
        </motion.h1>
        <div className="placement-bg"></div>
        {isPending && <Loader />}
        <motion.div className="placement-grid"
          ref={scrollRef}
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            type: "spring"
          }}>
          {placementArray &&
            placementArray.map((placement, i) => {
              return (
                <div className="place-card" key={placement._id}>
                  <img src={`http://localhost:5000/Placement_Intership/PlacementInterships_Image_Display/${placement._id}`} alt="cant load" className='placement-img' />
                  <div className='place-heading'> {placement.name}  </div>
                  <p> {placement.companyName} </p>
                </div>
              )
            })
          }
          <div className="blank place-card"></div>
        </motion.div>
        <button type='button' onClick={(e) => { handleClick(e) }} className='scroll-btn'>Scroll</button>
      </div>


    </section>

  )
}

import React from 'react'
import Loader from '../Components/Loader'
import useFetch from '../useFetch'

export default function Placements() {
  const { data: placementArray, isPending } = useFetch("http://localhost:5000/Placement_Intership/PlacementInterships_Display")
  console.log(placementArray ? placementArray : "")

  return (

    <section className='placements'>
      <div className="placements-container">
        <h1>Placements and Internships.</h1>
        <div className="placement-bg"></div>
        {isPending && <Loader />}
        <div className="placement-grid">
          {placementArray &&
            placementArray.map((placement, i) => {
              return (
                <div className="place-card" key={placement._id}>
                  <img src={`http://localhost:5000/Placement_Intership/PlacementInterships_Image_Display/${placement._id}`} alt="cant load" className='placement-img' />
                  <h1> {placement.name}  </h1>
                  <p> {placement.companyName} </p>
                </div>
              )
            })
          }
        </div>
      </div>


    </section>

  )
}

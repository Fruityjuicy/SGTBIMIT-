import React from 'react'
export default function DirectorMsg() {

  return (
    <div className="director-msg">
      <div className="bg-img"></div>
      <div className='director-container'>
        <h1 className='director-heading' data-aos="zoom-in" data-aos-offset="300" data-aos-duration="3000">DIRECTOR'S MESSAGE</h1>
        <img src={require("../images/director.jpg")} alt=""  data-aos="fade-up"/>
        <h1 className='wmk' data-aos="zoom-out">WAHEGURU JI KA KHALSA, WAHEGURU JI KI FATEH!!</h1>
        <p data-aos="zoom-in" className='dr-short-note'> “Those who walk on the path of truth shall be praised throughout the world”<br />
          <b data-aos="zoom-out">Sri Guru Granth Sahib Ji</b></p>
        <p data-aos="zoom-in" className="dr-long-note">We at Sri Guru Tegh Bahadur Institute of Management & Information Technology endeavor to follow Gurbani in letter and spirit.</p>
        <a data-aos="zoom-out" href="/">READ MORE</a>
      </div>



    </div>



  )
}
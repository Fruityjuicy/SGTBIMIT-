import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Welcome() {

  return (
    <section className="welcome"
    >
      <motion.div className="welcome-img"
        initial={{
          scale: 0
        }}
        whileInView={{
          scale: 1
        }}
        transition={{
          duration: 0.5,
          type: 'spring'
        }}
      >
        <img src={require("../images/gtbji.png")} alt="" />
      </motion.div>
      <div className='welcome-text'>
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
          Welcome to SGTBIMIT
        </motion.h1>
        <motion.p
          initial={{
            x: -400
          }}
          whileInView={{
            x: 0
          }}
          transition={{
            duration: 0.5,
            type: 'spring'
          }}>
          SGTBIMIT ascertains, preserves and disseminates knowledge. Since the establishment of SGTBIMIT in 2008, it has aimed to promote excellence in professional education and inspire research and extension work in the emerging areas of higher education in Management, Banking, Insurance and Information Technology. "A" degree level institute, approved by Directorate of Higher Education (Govt of NCT of Delhi) certified by ISO 9001:2015 and affiliated to Guru Gobind Singh Indraprastha University, Delhi. Located in the heart of the city, adjoining Gurudwara Nanak Piao, hardly 1 km away from North Campus (DU) and Model town Metro Station. Ever since its inception, SGTBIMIT has consistently shaped students who have outshined in academics and professional endeavors.

        </motion.p>
        <motion.button
          className="develop-skills-btn"
          type="button"
          initial={{
            scale: 0.5
          }}
          whileInView={{
            scale: 1
          }}
          transition={{
            duration: 0.5,
            type: 'spring'
          }}
        >

          <Link to="/skills" className="skills-text">
            Develop your skills with SGTBIMIT
          </Link>
          <img src={require("../images/VectorskillsArrow.png")} alt="cant load" className="skill-arrow" />

        </motion.button>
      </div>
    </section>

  )
}

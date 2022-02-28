import React, { useState, useEffect } from "react"

import { motion } from "framer-motion"
import { urlFor, client } from "../../client"
import "./Skills.scss"

import AppWrap from "../../wrapper/AppWrap"
import MotionWrap from "../../wrapper/MotionWrap"

const Skills = () => {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]'

    client.fetch(skillsQuery).then((data) => {
      setSkills(data)
    })
  }, [])
  return (
    <>
      <h2 className='head-text'>Skills </h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.2 }}
              className='app__skills-item app__flex'
              key={index}
            >
              <div
                className='app__flex'
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
)

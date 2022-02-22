import React, { useState } from "react"
import { HiMenuAlt4, HiX } from "react-icons/hi"
import { FaBars, FaRegWindowClose } from "react-icons/fa"
import { AiOutlineBars } from "react-icons/ai"
import { motion } from "framer-motion"

import { images } from "../constants"
import "./Navbar.scss"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => setToggle((prev) => !prev)

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.myLogo} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <FaBars onClick={handleToggle} color='#313bac' />

        {toggle && (
          <motion.div
            whileInView={{ x: [400, 0] }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <FaRegWindowClose onClick={handleToggle} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={handleToggle}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

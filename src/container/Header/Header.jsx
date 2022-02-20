import React from "react"
import "./Header.scss"
import { motion } from "framer-motion"
import { images } from "../../constants"

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
}

const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
      {/* 1 */}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am </p>
              <h1 className='head-text'>Ben</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Web Developer</p>
            <p className='p-text'>JavaScript Developer</p>
          </div>
        </div>
      </motion.div>
      {/* 2 */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.profile} alt='profile bg' />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className='overlay_circle'
          src={images.circle}
          alt='profile_circle'
        />
      </motion.div>
      {/* 3 */}
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.react, images.javascript, images.node, images.git].map(
          (circ, i) => (
            <div className='circle-cmp app__flex' key={i}>
              <img src={circ} alt={circ} />
            </div>
          )
        )}
      </motion.div>
    </div>
  )
}

export default Header

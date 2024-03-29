import React, { useState, useEffect } from "react"
import "./Testimonial.scss"
import { motion } from "framer-motion"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import { urlFor, client } from "../../client"
import AppWrap from "../../wrapper/AppWrap"
import MotionWrap from "../../wrapper/MotionWrap"

const Testimonial = () => {
  const [brands, setBrands] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const query = '*[_type == "testimonials"]'
    const brandsQuery = '*[_type == "brands"]'

    client.fetch(query).then((data) => {
      setTestimonials(data)
    })
    client.fetch(brandsQuery).then((data) => {
      setBrands(data)
    })
  }, [])
  const test = testimonials[currentIndex]
  return (
    <>
      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img src={urlFor(test.imgurl)} alt='testimonials' />
            <div className='app__testimonial-content'>
              <p className='p-text'>{test.feedback}</p>
              <h4 className='bold-text'>{test.name}</h4>
              <h5 className='p-text'>{test.company}</h5>
            </div>
          </div>
          <div className='app__testimonial-btns app__flex'>
            <div
              className='app__flex'
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className='app__flex'
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className='app__testimonial-brands app__flex'>
        {brands.map((br) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.2, type: "tween" }}
            key={br._id}
          >
            <img src={urlFor(br.imgUrl)} alt={br.name} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
)

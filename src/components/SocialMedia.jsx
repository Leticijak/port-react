import React from "react"

import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <FaTwitter />
      </div>
      <div>
        <FaInstagram />
      </div>
      <div>
        <FaFacebook />
      </div>
    </div>
  )
}

export default SocialMedia

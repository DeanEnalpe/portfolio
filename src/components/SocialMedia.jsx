import React from 'react'
import {FaFacebook, FaLinkedin, FaGithub} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <FaFacebook />
        </div>
        <div>
            <FaLinkedin />
        </div>
        <div>
            <FaGithub />
        </div>
    </div>
  )
}

export default SocialMedia;
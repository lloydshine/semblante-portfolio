import React from 'react'
import './socials.css';

import { FaFacebookSquare, FaGithub, FaGoogle } from 'react-icons/fa'

const Socials = () => {
  return (
    <div className='socials'>
        <div className="social">
            <FaFacebookSquare color="#fff" size={27} />
            <p>facebook</p>
        </div>
        <div className="social">
            <FaGoogle color="#fff" size={27} />
            <p>google</p>
        </div>
        <div className="social">
            <FaGithub color="#fff" size={27} />
            <p>github</p>
        </div>
    </div>
  )
}

export default Socials
import React from 'react'
import {FaQuestion} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const aboutLinkStyles = {
  position: 'fixed',
  bottom: '10px',
  right: '10px'
}

function AboutIconLink() {
  return (
    <div className='about-link' style={aboutLinkStyles}>
        <Link to="/about">
            <FaQuestion size={30}/>
        </Link>
    </div>
  )
}

export default AboutIconLink

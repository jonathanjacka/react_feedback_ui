import React, { useContext } from 'react'
import {FaQuestion} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FeedbackContext from '../context/FeedbackContext';

function AboutIconLink() {

  const { setShowAboutIcon } = useContext(FeedbackContext);
  return (
    <div className='about-link' >
        <Link to="/about" >
            <FaQuestion size={20} onClick={() => setShowAboutIcon(false)}/>
        </Link>
    </div>
  )
}

export default AboutIconLink

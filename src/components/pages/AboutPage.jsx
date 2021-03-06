import React, { useContext } from 'react'
import Card from '../shared/Card';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import FeedbackContext from '../../context/FeedbackContext';

function AboutPage() {

  const { setShowAboutIcon } = useContext(FeedbackContext);

  return (
    <Card>
        <div className="about">
            <AnimatePresence>
                <motion.div key={1} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                <h1>About this Project:</h1>
            <p>This is an unmaintained practice project using React</p>
            <p>Version: 1.0.0</p>
            <Link to='/' onClick={() => setShowAboutIcon(true)}>Home</Link>
                </motion.div>
            </AnimatePresence>

        </div>
    </Card>
  )
}

export default AboutPage

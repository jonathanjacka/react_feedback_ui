import React from 'react'
import {motion, AnimatePresence} from 'framer-motion';
import FeedbackItem from './FeedbackItem'

import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {

  const {feedback} = useContext(FeedbackContext);

  return (
    <div className='feedback-list'>
      <AnimatePresence>
      { feedback && feedback.length > 0 ? (
        feedback.map(item => 
          <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <FeedbackItem key={item.id} data={item} />
          </motion.div>
        )
      ) : <p>There are no items to display.</p> }
      </AnimatePresence>
    </div>
  )
  /* WITHOUT ANIMATION */
  // return (
  //   <div className='feedback-list'>
  //     { feedback && feedback.length > 0 ? (
  //       feedback.map(item => 
  //           <FeedbackItem key={item.id} data={item} handleDelete={handleDelete}/>
  //       )
  //     ) : <p>There are no items to display.</p> }
  //   </div>
  // )
}


export default FeedbackList

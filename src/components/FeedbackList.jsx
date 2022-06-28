import React from 'react'
import Proptypes from 'prop-types';
import {motion, AnimatePresence} from 'framer-motion';
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback, handleDelete}) {

  return (
    <div className='feedback-list'>
      <AnimatePresence>
      { feedback && feedback.length > 0 ? (
        feedback.map(item => 
          <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <FeedbackItem key={item.id} data={item} handleDelete={handleDelete}/>
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

FeedbackList.defaultProps = {
    feedback: []
}
FeedbackList.propTypes = {
    feedback: Proptypes.array.isRequired
}

export default FeedbackList

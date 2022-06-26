import React from 'react'
import Proptypes from 'prop-types';
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback, handleDelete}) {
  return (
    <div className='feedback-list'>
      { feedback && feedback.length > 0 ? (
        feedback.map(item => 
            <FeedbackItem key={item.id} data={item} handleDelete={handleDelete}/>
        )
      ) : <p>There are no items to display.</p> }
    </div>
  )
}

FeedbackList.defaultProps = {
    feedback: []
}
FeedbackList.propTypes = {
    feedback: Proptypes.array.isRequired
}

export default FeedbackList

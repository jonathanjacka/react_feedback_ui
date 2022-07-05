import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {

  const { feedback } = useContext(FeedbackContext);

    let averageRating = (feedback.reduce((total, currentVal) => total + currentVal.rating, 0 ) / feedback.length).toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length === 1 ? '1 Review' : (feedback.length + ' Reviews')}</h4>
      <h4>Average Rating: {isNaN(averageRating) ? 'No ratings' : averageRating} </h4>
    </div>
  )
}

export default FeedbackStats

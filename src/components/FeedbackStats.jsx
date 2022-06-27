import Proptypes from 'prop-types';

function FeedbackStats({feedback}) {

    let averageRating = (feedback.reduce((total, currentVal) => total + currentVal.rating, 0 ) / feedback.length).toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length === 1 ? '1 Review' : (feedback.length + ' Reviews')}</h4>
      <h4>Average Rating: {isNaN(averageRating) ? 'No ratings' : averageRating} </h4>
    </div>
  )
}

FeedbackStats.defaultProps = {
    feedback: []
}

FeedbackStats.propTypes = {
    feedback: Proptypes.array.isRequired
}

export default FeedbackStats

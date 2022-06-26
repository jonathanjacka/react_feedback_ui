import PropTypes from 'prop-types';

function FeedbackItem({data: {rating, text}}) {
    
    return (
        <div className='card'>
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
        </div>
    )
}

FeedbackItem.defaultProps = {
    data: {
        rating: 10,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    }
}
FeedbackItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default FeedbackItem;
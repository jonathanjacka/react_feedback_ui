import PropTypes from 'prop-types';

import Card from './shared/Card';

function FeedbackItem({data: {rating, text}}) {
    
    return (
        <Card>
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
        </Card>
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
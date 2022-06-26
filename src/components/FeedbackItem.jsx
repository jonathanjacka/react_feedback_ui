import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

import Card from './shared/Card';

function FeedbackItem({data: {rating, text, id}, handleDelete}) {

    
    return (
        <Card>
            <div className="num-display">{rating}</div>
            <button onClick={() => handleDelete(id)} className="close">
                <FaTimes color="purple"/>
            </button>
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
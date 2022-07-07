import { FaTimes, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

import Card from './shared/Card';

function FeedbackItem({item}) {

    const { deleteFeedBack, editFeedback } = useContext(FeedbackContext);
    
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedBack(item.id)} className="close">
                <FaTimes color="purple"/>
            </button>
            <button className="edit" onClick={() => editFeedback(item)}>
                <FaEdit color='purple'/>
            </button>
            <div className="text-display">{item.text}</div>
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
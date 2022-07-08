import { useContext, useState, useEffect } from 'react'
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
    const [ text, setText ] = useState('');
    const [ rating, setRating ] = useState(10);
    const [ btnDisabled, setBtnDisabled] = useState(true);
    const [ message, setMessage ] = useState(null);

    const { addFeedback: handleAdd, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

    useEffect( () => {
        if(feedbackEdit.edit) {
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    }, [feedbackEdit]);

    const handleTextChange = ({target: { value }}) => {

        setText(value);

        if(value === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if (value.trim().length < 10) {
            setMessage('Review must be 10 characters or more');
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(text.trim().length >= 10) {
            const newFeedback = {
                text,
                rating
            }
            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.id, newFeedback);
            } else {
                handleAdd(newFeedback);
            }
            
            setText('');
        }
    }

  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={setRating} selected={rating}/>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text}/>
                <Button type='submit' isDisabled={btnDisabled} handleSubmit={handleSubmit}>Post</Button>
                
            </div>
            {text.length > 0 && <div className='message'>{message}</div>}
        </form>
        
    </Card>
  )
}

export default FeedbackForm
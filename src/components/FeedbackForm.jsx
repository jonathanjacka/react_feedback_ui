import { useState } from 'react'
import Card from './shared/Card';

function FeedbackForm() {
    const [text, setText ] = useState('');

    const handleTextChange = ({target}) => setText(target.value);

  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            {/* @todo: Rating Select Component */}
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text}/>
                <button type='submit'>Post</button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm
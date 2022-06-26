import React, { useState } from 'react';

import FeedbackData from './data/FeedbackData';

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedBack = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      const newFeedback = feedback.filter((item) => item.id !== id);
      setFeedback(newFeedback);
    }
  };

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedBack} />
      </div>
    </>
  );
}

export default App;

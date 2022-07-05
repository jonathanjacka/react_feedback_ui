import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { FeedbackProvider } from './context/FeedbackContext';

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './components/pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <div className='container'>
                    <AboutIconLink />
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                  </div>
                </>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;

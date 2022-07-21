import React from 'react';
import spinner from '../assets/spinner.gif'

const spinnerStyles = {
    width: '100px',
    margin: 'auto',
    display: 'block'
}

function Spinner() {
  return (
    <img src={spinner} alt='loading' style={spinnerStyles}/>
  )
}

export default Spinner

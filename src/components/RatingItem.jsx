import React from 'react';

function RatingItem({selected, handleChange, idx}) {
  return (
    <li key={`rating-${idx}`}>
          <input
            type='radio'
            id={`num${idx}`}
            name='rating'
            value={idx}
            onChange={handleChange}
            checked={selected === idx}
          />
          <label htmlFor={`num${idx}`}>{idx}</label>
    </li>
  )
}

export default RatingItem
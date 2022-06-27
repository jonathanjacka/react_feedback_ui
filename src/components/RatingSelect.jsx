import RatingItem from './RatingItem';

function RatingSelect({select, selected}) {

    const handleChange = (event) => select(Number(event.currentTarget.value));

  return (
        <ul className='rating'>
            {   
                Array.from({length: 10}, (item, idx) => (<RatingItem handleChange={handleChange} selected={selected} key={idx + 1} idx={idx + 1}/>))
            }
        </ul>
  )
}

export default RatingSelect
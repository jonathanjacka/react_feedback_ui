import Proptypes from 'prop-types';

function Card({children, reverse}) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )
}

Card.defaultProps = {
    children: <div className="text-display">You're using a card</div>,
    reverse: false
}
Card.propTypes = {
    children: Proptypes.node.isRequired,
    reverse: Proptypes.bool
}

export default Card
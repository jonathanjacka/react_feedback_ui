import { useContext } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import AboutIconLink from './AboutIconLink';
import FeedbackContext from '../context/FeedbackContext';
function Header({text, bgColor, textColor}) {

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }

    const { showAboutIcon, setShowAboutIcon } = useContext(FeedbackContext);

  return (
    <header style={headerStyles}>
      <div className="container">
        <Link to='/' style={{textDecoration: 'inherit', color: textColor}} onClick={() => setShowAboutIcon(true)}>
          <h2 >{text}</h2>
        </Link>
      </div>
      {showAboutIcon && <AboutIconLink />}
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    textColor: '#ff6a95',
    bgColor: 'rgba(0, 0, 0, 0.4)'
};
Header.propTypes = {
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    bgColor: PropTypes.string,
}

export default Header;


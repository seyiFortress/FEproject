import React from 'react'
// import PropTypes from 'prop-types';

const Label = ({text, forAtt}) => {
    // Label.propTypes = {
    //     text: PropTypes.string.isRequired,
    //     forAtt: PropTypes.string.isRequired,
    // };
  return (
    <label htmlFor={forAtt}>
      {text}
    </label>
  )
}

export default Label

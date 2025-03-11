import React from 'react'
import PropTypes from 'prop-types'

const Button = ({text, submit, changeFunct, styleClass}) => {
    Button.propTypes = {
        text: PropTypes.string.isRequired,
        submit: PropTypes.string.isRequired,
        changeFunct: PropTypes.func.isRequired,
        styleClass: PropTypes.string.isRequired
    };
  return (
    <React.Fragment>
      <button
      type={submit}
      onClick={changeFunct}
      className={styleClass}>
        {text}
      </button>
    </React.Fragment>
  )
}

export default Button

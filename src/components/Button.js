import React from 'react'
// import PropTypes from 'prop-types'

const Button = ({text, submit}) => {
    // Button.propTypes = {
    //     text: PropTypes.string.isRequired,
    //     submit: PropTypes.string.isRequired,
    // };
  return (
    <React.Fragment>
      <Button type={submit}>{text}</Button>
    </React.Fragment>
  )
}

export default Button

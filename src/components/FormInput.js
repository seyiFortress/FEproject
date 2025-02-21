import React from 'react'
// import PropTypes from 'prop-types';

function FormInput({type, id, placeholder, value, name, changeFunct, styleClass}) {
    // FormInput.propTypes = {
    //     type: PropTypes.string.isRequired,
    //     id: PropTypes.string.isRequired,
    //     placeholder: PropTypes.string,
    //     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    //     name: PropTypes.string.isRequired,
    //     changeFunct: PropTypes.func.isRequired,
    //     styleClass: PropTypes.string.isRequired
    //   };
  return (
    <React.Fragment>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={changeFunct}
        className={styleClass}
        autoComplete='off'/>
    </React.Fragment>
  )
}

export default FormInput

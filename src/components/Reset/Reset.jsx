import React from 'react'
import PropTypes from 'prop-types';

export default function Reset({reset, billR}) {
  const buttonClass = billR === 0 ? 'reset-button no-active' : 'reset-button';
  return (
    <button onClick = {reset} type="button" id="reset-button" className={buttonClass}>RESET</button>
  )
}

Reset.propTypes = {
  reset: PropTypes.func.isRequired,
  billR: PropTypes.number.isRequired,
};

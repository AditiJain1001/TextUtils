import React from 'react'
import SvgAlertIcon from './SvgAlertIcon'

const Alert = (props) => {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }

  return (
    props.alertText && <div className="alert alert-secondary alert-dismissible fade show d-flex align-items-center" role="alert">
      <SvgAlertIcon/>
      <strong>{capitalize(props.alertText.type)}</strong>: {props.alertText.msg}
    </div>
  )
}

export default Alert;

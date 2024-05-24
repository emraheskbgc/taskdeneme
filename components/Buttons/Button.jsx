import React from 'react'

const Button = ({ title, className, onClick }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button

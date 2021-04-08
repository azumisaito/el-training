import React from 'react'

export const Button = (props) => {
  const text = (props.text) ? props.text : 'submit'
  return (
    <div>
      <button>{text}</ button>
    </div>
  )
}
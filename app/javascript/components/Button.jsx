import React from 'react'

export const Button = (props) => {
  const label = (props.label) ? props.label : 'submit'
  return (
    <div>
      <button>{label}</ button>
    </div>
  )
}
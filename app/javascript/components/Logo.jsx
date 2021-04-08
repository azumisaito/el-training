import React from 'react'
import logo from '~/images/mofmof.png'

export const Logo = (props) => {
  const width = (props.width) ? props.width : 200
  return (
    <div>
      <img src={logo} alt="mofmof" width={width} />
    </div>
  )
}

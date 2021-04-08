import React from 'react'

export const PageTitle = (props) => {
  const title = (props.text) ? props.text : 'Page Title'

  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

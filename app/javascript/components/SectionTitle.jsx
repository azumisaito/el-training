import React from 'react'

export const SectionTitle = (props) => {
  const title = (props.text) ? props.text : 'Section Title'

  return (
    <div>
      <h3>{title}</h3>
    </div>
  )
}

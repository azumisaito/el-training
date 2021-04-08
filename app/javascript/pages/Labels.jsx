import React from 'react'
import { PageTitle } from '~/components/PageTitle'

export const Labels = (props) => {
  return (
    <div>
      <PageTitle />
      こんにちは。{props.name}さん
    </div>
  )
}

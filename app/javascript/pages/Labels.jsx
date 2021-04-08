import React from 'react'
import { Button } from '~/components/Button'
import { PageTitle } from '~/components/PageTitle'
import { TextField } from '~/components/TextField'

const buttonLabel = "ラベルを作成"

export const Labels = (props) => {
  return (
    <div>
      <PageTitle />
      <TextField />
      <Button label={buttonLabel} />
      <p>こんにちは。{props.name}さん</p>
    </div>
  )
}

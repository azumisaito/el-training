import React, { useState } from 'react'
import { Button } from '~/components/Button'
import { PageTitle } from '~/components/PageTitle'
import { TextField } from '~/components/TextField'

import axios from 'axios'

export const Labels = (props) => {
  const [labels, setLabels] = useState([]),
        buttonLabel = "ラベルを作成"

  React.useEffect(async () => {
    const response = await axios.get('/api/labels');
    setLabels(response.data)
  }, [])

  return (
    <div>
      <PageTitle />
      <TextField />
      <Button label={buttonLabel} />
      <p>こんにちは。{props.name}さん</p>
      <ul>
      {labels.map(label => (
        <li key={label.id}>
          {label.name}
        </li>
      ))}
    </ul>
    </div>
  )
}

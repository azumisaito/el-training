import React, { useState } from 'react'
import { Button } from '~/components/Button'
import { PageTitle } from '~/components/PageTitle'
import { TextField } from '~/components/TextField'

import axios from 'axios'

export const LabelIndex = (props) => {
  const [labels, setLabels] = useState([]),
        buttonText = 'ラベルを作成',
        titleText = 'ラベル一覧'

  React.useEffect(async () => {
    const response = await axios.get('/api/labels');
    setLabels(response.data)
  }, [])

  return (
    <div>
      <PageTitle text={titleText} />
      <TextField />
      <Button text={buttonText} />
      <h3>ラベル</h3>
      <ul>
        {labels.map(label => (
          <li key={label.id}>
            {label.name}
            <a href="#">削除</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

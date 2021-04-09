import React, { useState } from 'react'
import { Button } from '~/components/Button'
import { PageTitle } from '~/components/PageTitle'
import { SectionTitle } from '~/components/SectionTitle'
import { TextField } from '~/components/TextField'

import axios from 'axios'

export const LabelsIndex = (props) => {
  const [labels, setLabels] = useState([]),
        buttonText = 'ラベルを作成',
        pageTitle = 'ラベル一覧',
        sectionTitle = 'ラベル'

  React.useEffect(async () => {
    const response = await axios.get('/api/labels');
    setLabels(response.data)
  }, [])

  return (
    <div>
      <PageTitle text={pageTitle} />
      <TextField />
      <Button text={buttonText} />
      <SectionTitle text={sectionTitle} />
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

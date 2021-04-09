import React, { useState } from 'react'
import { LabelCreateForm } from '~/components/LabelCreateForm'

import axios from 'axios'

export const Labels = (props) => {
  const [labels, setLabels] = useState([])

  React.useEffect(async () => {
    const response = await axios.get('/api/labels');
    setLabels(response.data)
  }, [])

  return (
    <div>
      <h1>ラベル一覧</h1>
      <LabelCreateForm labels={labels} setLabels={setLabels} />
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

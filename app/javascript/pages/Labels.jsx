import React, { useState } from 'react'
import { LabelCreateForm } from '~/components/LabelCreateForm'

import axios from 'axios'

export const Labels = (props) => {
  const [labels, setLabels] = useState([]),
        [labelName, setLabelName] = useState('')

  React.useEffect(async () => {
    const response = await axios.get('/api/labels');
    setLabels(response.data)
  }, [])

  return (
    <div>
      <h1>ラベル一覧</h1>
      <LabelCreateForm setLabelName={setLabelName} />
      <h3>ラベル</h3>
      <ul>
        {labels.map(label => (
          <li key={label.id}>
            {label.name}
            <a href="#">削除</a>
          </li>
        ))}
        <li>追加のラベル：{labelName}</li>
      </ul>
    </div>
  )
}

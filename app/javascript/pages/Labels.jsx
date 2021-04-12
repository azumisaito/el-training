import React, { useState } from 'react'
import { LabelCreateForm } from '~/components/LabelCreateForm'

import axios from 'axios'

export const Labels = (props) => {
  const [labels, setLabels] = useState([])

  React.useEffect(async () => {
    const response = await axios.get('/api/labels');
    setLabels(response.data)
  }, [])

  const removeLabel = (labelId, e) => {
    e.preventDefault();
    if (window.confirm("ラベルを削除します。よろしいですか?")) {
      axios.delete("/labels/" + labelId, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
      })
      .then( res => {
        const targetIndex = labels.findIndex( label => {
          return label.id === res.data.id
        })
        const newLabels = labels.slice();
        newLabels.splice(targetIndex, 1);
        setLabels(newLabels)
      })
      .catch(data => {
        console.log(data);
      })
    }
  }
  return (
    <div>
      <h1>ラベル一覧</h1>
      <LabelCreateForm labels={labels} setLabels={setLabels} />
      <h3>ラベル</h3>
      <ul>
        {labels.map(label => (
          <li key={label.id}>
            {label.name}
            <a href="" onClick={(e) => removeLabel(label.id, e)}>削除</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

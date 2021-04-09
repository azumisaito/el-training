import React, { useState } from 'react'
import { LabelCreateForm } from '~/components/LabelCreateForm'
import { PageTitle } from '~/components/PageTitle'
import { SectionTitle } from '~/components/SectionTitle'

import axios from 'axios'

export const Labels = (props) => {
  const [labels, setLabels] = useState([]),
        pageTitle = 'ラベル一覧',
        sectionTitle = 'ラベル'

  React.useEffect(async () => {
    const response = await axios.get('/api/labels');
    setLabels(response.data)
  }, [])

  return (
    <div>
      <PageTitle text={pageTitle} />
      <LabelCreateForm />
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

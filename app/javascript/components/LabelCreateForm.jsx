import React, { useState } from 'react'
import axios from 'axios'

export const LabelCreateForm = () => {
  const [data, setData] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/labels", {
      label: {
        name: data,
      }
    })
    .then( response => {
      console.log("responseの内容", response.data)
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>ラベル名
          <input
            type="text"
            value={data}
            onChange={event => setData(event.target.value)}
          />
          <input type="submit" value="ラベルを作成" />
        </label>
      </form>
    </div>
  )
}

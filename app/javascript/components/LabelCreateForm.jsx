import React, { useState } from 'react'
import axios from 'axios'

export const LabelCreateForm = () => {
  const [data, setData] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if(data){
      axios.post("/api/labels", {
        label: {
          name: data,
        }
      })
      .then( response => {
        console.log(response.data.name) // これを親要素に渡したい
        setData('')
      })
      .catch( error => {
        console.log(error)
      })
    } else {
      alert('ラベル名を入力してください');
    }
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

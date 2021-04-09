import React, { useState } from 'react'
import axios from 'axios'

export const LabelCreateForm = () => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if(value){
      axios.post("/api/labels", {
        label: {
          name: value,
        }
      })
      .then( response => {
        console.log(response.data.name) // これを親要素に渡したい
        setValue('')
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
            value={value}
            onChange={event => setValue(event.target.value)}
          />
          <input type="submit" value="ラベルを作成" />
        </label>
      </form>
    </div>
  )
}

import React, { useState } from 'react'
import axios from 'axios'

export const TaskCreateForm = () => {
  const token = document.querySelector('[name=csrf-token]').content
  axios.defaults.headers.common['X-CSRF-TOKEN'] = token

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [endDate, setEndDate] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/tasks", {
      task: {
        name: name,
        description: description,
        end_date: endDate,
        status: 0,
        priority: 0,
        user_id: 1
      }
    })
  }

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'description':
        setDescription(event.target.value);
        break;
      case 'endDate':
        setEndDate(event.target.value);
        break;
      default:
        console.log('key not found');
    }
  };

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>タスク名</p>
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          <p>詳細</p>
          <textarea rows="4" cols="40" name="description" value={description} onChange={handleChange} ></textarea>
        </label>
        <label>
          <p>終了期限</p>
          <input type="date" name="endDate" value={endDate} onChange={handleChange} />
        </label>
        <p>
          <input type="submit" value="登録する" />
        </p>
      </form>
    </div>
  )
}
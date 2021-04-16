import React from 'react'
import axios from 'axios'

export const TaskCreateForm = () => {

  const token = document.querySelector('[name=csrf-token]').content
  axios.defaults.headers.common['X-CSRF-TOKEN'] = token

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/tasks", {
      task: {
        name: "test",
        description: "テストの説明",
        end_date: "",
        status: 0,
        priority: 0,
        user_id: 1
      }
    })
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>タスク名</p>
          <input type="text" />
        </label>
        <label>
          <p>詳細</p>
          <textarea rows="4" cols="40"></textarea>
        </label>
        <label>
          <p>終了期限</p>
          <input type="date" />
        </label>
        <p>
          <input type="submit" value="登録する" />
        </p>
      </form>
    </div>
  )
}
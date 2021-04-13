import React from 'react'

export const TaskCreateForm = () => {

  return(
    <div>
      <form>
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
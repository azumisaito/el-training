import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={'/spa/tasks'}>タスク一覧</Link>
        </li>
        <li>
          <a href='/tasks/new'>タスク作成</a>
        </li>
        <li>
          <Link to={'/spa/labels'}>ラベル一覧</Link>
        </li>
        <li>
          <a href='/logout' data-method="delete">ログアウト</a>
        </li>
      </ul>
    </div>
  )
}
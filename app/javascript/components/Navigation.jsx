import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div>
      <p>SPAメニュー</p>
      <ul>
        <li>
          <Link to={'/spa/tasks'}>タスク一覧</Link>
        </li>
        <li>
          <a href="#">タスク作成</a>
        </li>
        <li>
          <Link to={'/spa/labels'}>ラベル一覧</Link>
        </li>
        <li>
          <a href="#">ログアウト</a>
        </li>
      </ul>
    </div>
  )
}
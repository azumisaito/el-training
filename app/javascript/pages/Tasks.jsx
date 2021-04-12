import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { LabelCreateForm } from '~/components/LabelCreateForm'
import { Labels } from './Labels'

export const Tasks = () => {
  const [tasks, setTasks] = useState([])

  React.useEffect(async () =>{
    const response = await axios.get('/api/tasks');
    setTasks(response.data)
  }, [])

  return (
    <div>
      <h1>タスク一覧</h1>
      <LabelCreateForm />
      <table>
        <thead>
          <tr>
            <th>タスク名</th>
            <th>終了期限</th>
            <th>ステータス</th>
            <th>優先順位</th>
            <th>ラベル</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>
                <Link to={'/spa/tasks/' + task.id}>{task.name}</Link>
              </td>
              <td>
                {task.end_date}
              </td>
              <td>
                {task.status} {/* TODO: enumを日本語にしたい */}
              </td>
              <td>
                {task.priority}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

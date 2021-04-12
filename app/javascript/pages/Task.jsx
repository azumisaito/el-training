import React, {useState} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

export const Task = () => {
  const [task, setTask] = useState(''),
        location = useLocation(),
        taskId = location.state.id;


  React.useEffect(async () =>{
    const response = await axios.get("/api/tasks/" + taskId);
    setTask(response.data)
  }, [])

  return (
    <div>
      <h1>タスク詳細</h1>
      <h2>{task.name}</h2>
      <h3>詳細</h3>
      <table>
        <tbody>
          <tr>
            <th>終了期限</th>
            <td>{task.end_date}</td>
          </tr>
          <tr>
            <th>ステータス</th>
            <td>{task.status}</td>
          </tr>
          <tr>
            <th>優先順位</th>
            <td>{task.priority}</td>
          </tr>
        </tbody>
      </table>
      <h3>ラベル</h3>
    </div>
  )
}

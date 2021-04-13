import React from 'react'
import { TaskCreateForm } from '~/components/TaskCreateForm'

export const TasksNew = () => {
  return (
    <div>
      <h1>タスク作成</h1>
      <TaskCreateForm />
    </div>
  )
}
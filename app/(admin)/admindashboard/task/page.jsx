'use client'

import { formatDate } from '../../../../lib/utils/formatter.js'
import { useEffect, useState } from 'react'
import { getAPI } from '../../../../services/fetchAPI/index.js'
import Link from 'next/link'
import Loading from '../../../../components/loading'
import checkPriority from '../../../../lib/utils/checkPriority.js'
const TasksPage = () => {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const getTasks = async () => {
      const taskData = await getAPI('/tasks/get-tasks')
      setTasks(taskData.tasks)
    }
    getTasks()
  }, [])

  if (tasks.length <= 0) {
    return <Loading />
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 ">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="border p-4 flex flex-col gap-3 hover:shadow-md cursor-pointer rounded-md hover:scale-105"
        >
          <div className="flex items-center justify-between">
            <Link href={`/admindashboard/task/${task.id}`}>
              <h2 className="text-xl font-bold hover:text-blue-600">
                {task.title}
              </h2>
            </Link>
            <p className={checkPriority(task.priority)}>
              <span>{task.priority}</span> PRIORITY
            </p>
          </div>
          <div>
            <p className="text-sm">{task.description}</p>
          </div>
          <p>{`Status: ${task.status}`}</p>
          <p>{formatDate(task.createdAt)}</p>
        </div>
      ))}
    </div>
  )
}
export default TasksPage

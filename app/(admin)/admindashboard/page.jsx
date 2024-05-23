'use client'

import { useEffect, useState } from 'react'
import { getAPI } from '../../../services/fetchAPI'
import Link from 'next/link'

const AdminDashboard = () => {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const getTasks = async () => {
      const taskData = await getAPI('/tasks/get-tasks')
      setTasks(taskData.tasks)
    }
    getTasks()
  }, [])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="border p-4 flex flex-col gap-3 hover:shadow-md cursor-pointer rounded-md hover:scale-105"
        >
          <div className="flex items-center justify-between">
            <Link href={`admindashboard/task/${task.id}`}>
              <h2 className="text-xl font-bold hover:text-blue-600">
                {task.title}
              </h2>
            </Link>
            <p className="font-semibold">{task.priority}</p>
          </div>
          <div>
            <p className="text-sm">{task.description}</p>
          </div>
          <p>{`Status: ${task.status}`}</p>
          <p>{task.createdAt}</p>
        </div>
      ))}
    </div>
  )
}
export default AdminDashboard

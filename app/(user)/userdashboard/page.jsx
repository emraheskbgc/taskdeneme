'use client'

import { useEffect, useState } from 'react'
import { getAPI } from '../../../services/fetchAPI'
import getUser from '../../../lib/utils/getUser.js'
import TaskCard from '../../../components/TaskCard'

const UserDashboard = () => {
  const [tasks, setTasks] = useState([])
  const user = getUser()

  useEffect(() => {
    const getTaskForUser = async () => {
      const res = await getAPI(`/tasks/${user.id}/get-tasks-user`)
      setTasks(res.tasks)
    }

    getTaskForUser()
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          route={`/userdashboard/task/${task.id}`}
        />
      ))}
    </div>
  )
}
export default UserDashboard

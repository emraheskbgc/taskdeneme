'use client'

import { useEffect, useState } from 'react'
import { getAPI } from '../../../../../services/fetchAPI/index.js'

const TaskPage = ({ params }) => {
  const [taskDetail, setTaskDetail] = useState()
  useEffect(() => {
    const getTask = async () => {
      const res = await getAPI(`/tasks/${params.id}/get-task`)
    }
    getTask()
  }, [])
  return <div></div>
}
export default TaskPage

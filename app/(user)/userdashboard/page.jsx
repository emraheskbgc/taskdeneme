'use client'

import { useEffect } from 'react'
import { getAPI } from '../../../services/fetchAPI'
import getUser from '../../../lib/utils/getUser.js'

const UserDashboard = () => {
  const user = getUser()

  useEffect(() => {
    const getTaskForUser = async () => {
      const res = await getAPI(`/tasks/${user.id}/get-tasks-user`)
    }
  }, [])

  return <div>user dashboardPage</div>
}
export default UserDashboard

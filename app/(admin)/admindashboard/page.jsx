'use client'

import { useEffect, useState } from 'react'
import { checkRole } from '../../../lib/utils/authUtils'
import { useRouter } from 'next/navigation'
import Navbar from '../../../components/Navbar'
import { adminNavLinks } from '../../../lib/constants/navLinks'

const AdminDashboard = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const verifyRole = async () => {
      const res = checkRole()
      if (res.role !== 'ADMIN') {
        router.push('/userdashboard')
      } else if (res.role === '') {
        router.push('/login')
      } else {
        setLoading(false)
      }
    }
    verifyRole()
  }, [router])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Navbar title={'Admin Dashboard'} navLinks={adminNavLinks} />
    </div>
  )
}
export default AdminDashboard

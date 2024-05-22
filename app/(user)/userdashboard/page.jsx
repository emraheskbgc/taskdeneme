'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { checkRole } from '../../../lib/utils/authUtils'
import { userNavLinks } from '../../../lib/constants/navLinks'
import Navbar from '../../../components/Navbar'

const UserDashboard = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const verifyRole = async () => {
      const res = checkRole()
      if (res.role === '') {
        router.push('/login')
      } else if (res.role !== 'USER') {
        router.push('/admindashboard')
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
      <Navbar title={'User Dashboard'} navLinks={userNavLinks} />
    </div>
  )
}
export default UserDashboard

'use client'
import Navbar from '../../../components/Navbar'
import { adminNavLinks } from '../../../lib/constants/navLinks'
import { useRoleRedirect } from '../../../lib/utils/useRoleRedirect'

const AdminDashboard = () => {
  const loading = useRoleRedirect('ADMIN', '/userdashboard')

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

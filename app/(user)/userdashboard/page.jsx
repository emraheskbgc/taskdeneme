'use client'
import { userNavLinks } from '../../../lib/constants/navLinks'
import Navbar from '../../../components/Navbar'
import { useRoleRedirect } from '../../../lib/utils/useRoleRedirect'
const UserDashboard = () => {
  const loading = useRoleRedirect('USER', '/admindashboard')

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

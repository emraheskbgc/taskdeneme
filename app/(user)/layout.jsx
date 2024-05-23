'use client'
import { userNavLinks } from '../../lib/constants/navLinks'
import Navbar from '../../components/Navbar'
import { useRoleRedirect } from '../../lib/utils/useRoleRedirect'
import Loading from '../../components/loading/index'

const UserLayout = ({ children }) => {
  const loading = useRoleRedirect('USER', '/admindashboard')

  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <Navbar
        route={'/userdashboard'}
        title={'User Dashboard'}
        navLinks={userNavLinks}
      />
      <div className="p-7">{children}</div>
    </div>
  )
}
export default UserLayout

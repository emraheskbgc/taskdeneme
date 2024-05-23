'use client'
import Navbar from '../../components/Navbar'
import { adminNavLinks } from '../../lib/constants/navLinks'
import { useRoleRedirect } from '../../lib/utils/useRoleRedirect'
import Loading from '../../components/loading/index'

const AdminLayout = ({ children }) => {
  const loading = useRoleRedirect('ADMIN', '/userdashboard')

  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <Navbar
        route={'/admindashboard'}
        title={'Admin Dashboard'}
        navLinks={adminNavLinks}
      />
      <div className="p-7">{children}</div>
    </div>
  )
}
export default AdminLayout

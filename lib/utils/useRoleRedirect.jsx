import { useEffect } from 'react'

import { checkRole } from './authUtils'
import { useRouter } from 'next/navigation'

export const useRoleRedirect = (desiredRole) => {
  const router = useRouter()

  useEffect(() => {
    const verifyRole = async () => {
      const role = checkRole()
      if (!role) {
        router.push('/login')
      } else if (role !== desiredRole) {
        router.push(role === 'ADMIN' ? '/admindashboard' : '/userdashboard')
      }
    }
    verifyRole()
  }, [router, desiredRole])
}

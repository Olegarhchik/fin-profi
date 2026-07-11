import { Navigate, Outlet } from 'react-router-dom'

import { AUTH } from '@/constants'
import { useUserStore } from '@/store'

export function ProtectedRoutes() {
  const auth = useUserStore(state => state.auth)

  return auth === AUTH.AUTHORIZED ? <Outlet /> : <Navigate to="/" replace />
}
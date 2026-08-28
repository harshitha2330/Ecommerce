import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

type ProtectedRouteProps = {
  isAuthenticated: boolean
  children: ReactNode
  redirectTo?: string
}

function ProtectedRoute({ isAuthenticated, children, redirectTo = '/login' }: ProtectedRouteProps) {
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace state={{ from: location }} />
  }

  return children
}

export default ProtectedRoute

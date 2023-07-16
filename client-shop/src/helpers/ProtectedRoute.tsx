import { Navigate } from 'react-router'

function ProtectedRoute({ isLoggedIn, children }: {isLoggedIn: boolean, children: JSX.Element}) {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace/>
  }
  return children;
}

export default ProtectedRoute
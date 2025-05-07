import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // TODO: Implement proper authentication check
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

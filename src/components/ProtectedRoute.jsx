import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // Verificamos si existe el usuario en LocalStorage
  const user = JSON.parse(localStorage.getItem('user'));

  // Si no hay usuario, redirigimos al login. Si lo hay, renderizamos las rutas hijas (Outlet)
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
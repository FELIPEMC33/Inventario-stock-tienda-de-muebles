import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user'); // Limpiamos la sesión
    navigate('/login'); // Redirigimos
  };

  return (
    <nav className="navbar navbar-expand-lg bg-ikea-blue shadow-sm mb-4">
      <div className="container">
        <Link className="navbar-brand text-white fw-bold" to="/productos">
          📦 INVENTARIO TIENDA
        </Link>
        <div className="d-flex align-items-center">
          <span className="text-white me-3 d-none d-md-block">
            Hola, <strong>{user?.username}</strong>
          </span>
          <button className="btn btn-ikea-yellow btn-sm" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
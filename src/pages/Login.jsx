import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username.trim() || !pin.trim()) {
      return Swal.fire('Error', 'Por favor ingresa usuario y PIN', 'error');
    }

    // Simulamos la persistencia de sesión
    localStorage.setItem('user', JSON.stringify({ username }));
    Swal.fire({
      icon: 'success',
      title: '¡Bienvenido!',
      text: `Hola de nuevo, ${username}`,
      timer: 1500,
      showConfirmButton: false
    }).then(() => {
      navigate('/productos');
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-ikea-blue">
      <div className="card shadow-lg p-4 rounded-4" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="text-center mb-4">
          <h2 className="text-ikea-blue fw-bold">Acceso al Panel</h2>
          <p className="text-muted">Ingresa tus credenciales para continuar</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-bold">Nombre de Usuario</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Ej. felipe_admin"
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
          <div className="mb-4">
            <label className="form-label fw-bold">PIN de Seguridad</label>
            <input 
              type="password" 
              className="form-control" 
              placeholder="****"
              value={pin} 
              onChange={(e) => setPin(e.target.value)} 
            />
          </div>
          <button type="submit" className="btn btn-ikea-yellow w-100 py-2">
            Ingresar al Inventario
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
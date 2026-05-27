import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Inventory from './pages/Inventory';
import ProductForm from './pages/ProductForm';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Routes>
        {/* Ruta Pública */}
        <Route path="/login" element={<Login />} />

        {/* Rutas Protegidas (Requieren Login) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Navigate to="/productos" />} />
          <Route path="/productos" element={<><Navbar /><Inventory /></>} />
          <Route path="/nuevo-producto" element={<><Navbar /><ProductForm /></>} />
          <Route path="/editar-producto/:id" element={<><Navbar /><ProductForm /></>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
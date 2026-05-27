import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';
import ProductCard from '../components/ProductCard';
import Spinner from '../components/Spinner';
import Swal from 'sweetalert2';

const Inventory = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [loading, setLoading] = useState(true);

  const cargarProductos = async () => {
    try {
      const data = await api.getProductos();
      setProductos(data);
    } catch (error) {
      Swal.fire('Error', 'No se pudieron cargar los productos', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const handleDelete = async (id) => {
    // Alerta de confirmación Obligatoria con SweetAlert2
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: "Esta acción no se puede deshacer",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      try {
        await api.eliminarProducto(id);
        setProductos(productos.filter(p => p.id !== id));
        Swal.fire('¡Eliminado!', 'El producto ha sido borrado del catálogo.', 'success');
      } catch (error) {
        Swal.fire('Error', 'Hubo un problema al eliminar', 'error');
      }
    }
  };

  // Lógica de filtrado dinámico
  const productosFiltrados = productos.filter(p => 
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
    p.categoria.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container pb-5">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <h2 className="text-ikea-blue fw-bold m-0">Catálogo de Productos</h2>
        <Link to="/nuevo-producto" className="btn btn-ikea-yellow">
          + Añadir Producto
        </Link>
      </div>

      <div className="mb-4">
        <input 
          type="text" 
          className="form-control form-control-lg shadow-sm" 
          placeholder="🔍 Buscar por nombre o categoría..." 
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      {loading ? (
        <Spinner />
      ) : productosFiltrados.length === 0 ? (
        <div className="alert alert-info text-center">No se encontraron productos.</div>
      ) : (
        <div className="row">
          {productosFiltrados.map(producto => (
            <ProductCard 
              key={producto.id} 
              producto={producto} 
              onEliminar={handleDelete} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Inventory;
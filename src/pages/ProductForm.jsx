import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import Spinner from '../components/Spinner';
import Swal from 'sweetalert2';

const ProductForm = () => {
  const { id } = useParams(); // Si hay ID, es modo edición
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const [formulario, setFormulario] = useState({
    nombre: '',
    precio: '',
    categoria: '',
    stock: '',
    imagen: ''
  });

  useEffect(() => {
    if (id) {
      const cargarProducto = async () => {
        setLoading(true);
        try {
          const data = await api.getProducto(id);
          setFormulario(data);
        } catch (error) {
          Swal.fire('Error', 'No se encontró el producto', 'error');
          navigate('/productos');
        } finally {
          setLoading(false);
        }
      };
      cargarProducto();
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones de números negativos
    if (formulario.precio < 0 || formulario.stock < 0) {
      return Swal.fire('Atención', 'El precio y el stock no pueden ser negativos.', 'warning');
    }

    setLoading(true);
    try {
      if (id) {
        await api.editarProducto(id, formulario);
        Swal.fire('¡Actualizado!', 'El producto se actualizó correctamente.', 'success');
      } else {
        await api.crearProducto(formulario);
        Swal.fire('¡Creado!', 'El nuevo producto se añadió al catálogo.', 'success');
      }
      navigate('/productos');
    } catch (error) {
      Swal.fire('Error', 'Hubo un problema al guardar el producto', 'error');
    } finally {
      setLoading(false);
    }
  };

  if (loading && id) return <Spinner />;

  return (
    <div className="container pb-5">
      <div className="card border-0 shadow-sm mx-auto" style={{ maxWidth: '600px' }}>
        <div className="card-header bg-ikea-blue text-white py-3">
          <h4 className="m-0 fw-bold">{id ? '✏️ Editar Producto' : '📦 Nuevo Producto'}</h4>
        </div>
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bold">Nombre del Producto</label>
              <input type="text" className="form-control" name="nombre" value={formulario.nombre} onChange={handleChange} required />
            </div>
            
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-bold">Precio ($)</label>
                <input type="number" className="form-control" name="precio" value={formulario.precio} onChange={handleChange} required min="0" step="0.01" />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Stock (Cantidad)</label>
                <input type="number" className="form-control" name="stock" value={formulario.stock} onChange={handleChange} required min="0" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Categoría</label>
              <select className="form-select" name="categoria" value={formulario.categoria} onChange={handleChange} required>
                <option value="">Selecciona una categoría...</option>
                <option value="Muebles">Muebles</option>
                <option value="Decoración">Decoración</option>
                <option value="Iluminación">Iluminación</option>
                <option value="Hogar">Hogar</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="form-label fw-bold">URL de la Imagen (Opcional)</label>
              <input type="url" className="form-control" name="imagen" value={formulario.imagen} onChange={handleChange} placeholder="https://ejemplo.com/imagen.jpg" />
            </div>

            <div className="d-flex justify-content-between">
              <Link to="/productos" className="btn btn-outline-secondary">Cancelar</Link>
              <button type="submit" className="btn btn-ikea-yellow px-4" disabled={loading}>
                {loading ? 'Guardando...' : 'Guardar Producto'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
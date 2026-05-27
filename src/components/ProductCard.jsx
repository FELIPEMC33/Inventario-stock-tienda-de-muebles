import { Link } from 'react-router-dom';

const ProductCard = ({ producto, onEliminar }) => {
  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <div className="card h-100 card-hover border-0 shadow-sm">
        <img 
          src={producto.imagen || 'https://via.placeholder.com/150'} 
          className="card-img-top" 
          alt={producto.nombre} 
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold text-truncate">{producto.nombre}</h5>
          <span className="badge bg-secondary mb-2 align-self-start">{producto.categoria}</span>
          <p className="card-text text-success fw-bold fs-5 mb-1">${producto.precio}</p>
          <p className="card-text text-muted small">Stock: {producto.stock} uds.</p>
          
          <div className="mt-auto d-flex gap-2">
            <Link to={`/editar-producto/${producto.id}`} className="btn btn-outline-primary btn-sm w-50">
              Editar
            </Link>
            <button onClick={() => onEliminar(producto.id)} className="btn btn-outline-danger btn-sm w-50">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
// src/services/api.js
// Cambiamos la API externa por LocalStorage para simular la base de datos localmente

const STORAGE_KEY = 'productos_tienda';

// Función auxiliar interna para obtener los productos del LocalStorage
const obtenerDeStorage = () => {
  const datos = localStorage.getItem(STORAGE_KEY);
  // Si existen datos los convierte de texto a Array, si no, devuelve un array vacío []
  return datos ? JSON.parse(datos) : [];
};

// Función auxiliar interna para guardar el Array actualizado como texto
const guardarEnStorage = (productos) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(productos));
};

export const api = {
  // GET: Obtener todos los productos
  getProductos: async () => {
    return obtenerDeStorage();
  },
  
  // GET: Obtener un solo producto por su ID (para editar)
  getProducto: async (id) => {
    const productos = obtenerDeStorage();
    // Buscamos el producto convirtiendo ambos IDs a string para evitar errores de tipo
    return productos.find(p => String(p.id) === String(id));
  },

  // POST: Crear y guardar un nuevo producto
  crearProducto: async (nuevoProducto) => {
    const productos = obtenerDeStorage();
    
    // Le asignamos un ID único automático basado en los milisegundos actuales
    const productoConId = {
      ...nuevoProducto,
      id: Date.now().toString() 
    };

    productos.push(productoConId); // Lo agregamos al array
    guardarEnStorage(productos);   // Guardamos el nuevo array en LocalStorage
    return productoConId;
  },

  // PUT: Editar un producto existente
  editarProducto: async (id, productoEditado) => {
    const productos = obtenerDeStorage();
    // Buscamos el índice del producto que queremos modificar
    const index = productos.findIndex(p => String(p.id) === String(id));
    
    if (index !== -1) {
      // Reemplazamos los datos viejos por los nuevos, manteniendo su ID original
      productos[index] = { ...productoEditado, id: String(id) };
      guardarEnStorage(productos);
    }
    return productos[index];
  },

  // DELETE: Eliminar un producto del catálogo
  eliminarProducto: async (id) => {
    const productos = obtenerDeStorage();
    // Filtramos el array dejando fuera el ID que queremos borrar
    const productosFiltrados = productos.filter(p => String(p.id) !== String(id));
    
    guardarEnStorage(productosFiltrados); // Guardamos la lista limpia
    return { success: true };
  }
};
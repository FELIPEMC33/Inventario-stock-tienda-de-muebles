# 📦 INVENTARIO TIENDA 🟡🔵

¡Bienvenido al sistema de gestión de inventario inteligente! Este panel administrativo adopta una interfaz limpia, intuitiva y funcional inspirada en la línea de diseño visual de **IKEA**, garantizando una experiencia de usuario fluida y responsiva para el control de existencias.

---

## 🎨 Identidad Visual (IKEA Corporate Style)
Este proyecto utiliza una paleta de colores corporativa para destacar la jerarquía de las acciones:
* 🔵 **Azul Rey (`#0051ba`):** Estructura, navegación y componentes primarios.
* 🟡 **Amarillo Contraste (`#ffda1a`):** Botones de acción principal, destaques y llamadas a la atención.

---

## 🚀 Características Principales

* 🔐 **Control de Acceso Seguro:** Sistema de Login simulado con protección de rutas globales.
* 📊 **Gestión CRUD Completa:** Capacidad de Crear, Leer, Actualizar y Eliminar productos del catálogo.
* 🔍 **Buscador Dinámico:** Filtro en tiempo real por coincidencia de nombre o categoría de artículo.
* 🛡️ **Validación de Datos:** Restricción nativa para impedir el ingreso de valores negativos en precios o stock.
* 💾 **Persistencia Local:** Los datos se resguardan en el navegador a través de `LocalStorage`, simulando una base de datos sin dependencias externas.

---

## 🛠️ Stack Tecnológico

El ecosistema de herramientas implementado en este desarrollo incluye:

| Tecnología / Librería | Función | Insignia |
| :--- | :--- | :--- |
| **React.js** | Core del Frontend | ![React](https://img.shields.io/badge/React-0051ba?style=for-the-badge&logo=react&logoColor=ffda1a) |
| **Vite** | Entorno de Construcción | ![Vite](https://img.shields.io/badge/Vite-ffda1a?style=for-the-badge&logo=vite&logoColor=0051ba) |
| **Bootstrap** | Maquetación y Responsividad | ![Bootstrap](https://img.shields.io/badge/Bootstrap-0051ba?style=for-the-badge&logo=bootstrap&logoColor=white) |
| **SweetAlert2** | Alertas Dinámicas y Confirmaciones | ![SweetAlert2](https://img.shields.io/badge/SweetAlert2-ffda1a?style=for-the-badge&logo=sweetalert&logoColor=0051ba) |
| **LocalStorage** | Simulación de API / Persistencia | ![Storage](https://img.shields.io/badge/LocalStorage-0051ba?style=for-the-badge&logo=databricks&logoColor=white) |

---

## 📂 Arquitectura del Proyecto

La estructura del código sigue un estándar modular limpio para facilitar el mantenimiento y escalabilidad académica:

```text
src/
├── 📁 components/     # Componentes aislados y reutilizables (Navbar, Cards, Spinners)
├── 📁 pages/          # Vistas principales del aplicativo (Login, Inventario, Formulario)
├── 📁 services/       # Capa de abstracción de datos y persistencia (api.js)
├── 📄 App.jsx         # Enrutador central y protección de accesos
└── 📄 main.jsx        # Punto de entrada del DOM de React

URL , desplegable

https://inventario-stock-tienda-de-muebles.vercel.app/login



# 🚀 Guía de Ejecución Local - Inventario de Tienda

Este documento contiene las instrucciones detalladas para clonar, instalar las dependencias y ejecutar el panel administrativo de gestión de inventario en un entorno de desarrollo local.

---

## 📋 Requisitos Previos

Antes de iniciar, asegúrate de tener instalado en tu sistema:
* **Node.js** (Versión 18.0 o superior recomendada)
* **npm** (Instalado automáticamente junto con Node.js)
* **Git** (Para la clonación del repositorio)

---

## 🛠️ Pasos para la Configuración y Ejecución

Sigue estos cuatro pasos secuenciales desde tu terminal de comandos (Command Prompt, PowerShell o Git Bash):

### 1. Clonar el Repositorio
Descarga una copia completa del proyecto desde GitHub ejecutando:
```bash
git clone [https://github.com/FELIPEMC33/Inventario-stock-tienda-de-muebles.git](https://github.com/FELIPEMC33/Inventario-stock-tienda-de-muebles.git)


2. Acceder al Directorio del Proyecto
Navega hacia el interior de la carpeta raíz del proyecto que se acaba de crear:
Bash
cd Inventario-stock-tienda-de-muebles
3. Instalar las Dependencias (npm install)
Este comando leerá el archivo package.json y descargará de forma automática todas las librerías necesarias (React, Vite, Bootstrap, SweetAlert2, etc.) estructurando la carpeta local node_modules:
Bash
npm install
4. Ejecutar en Entorno de Desarrollo (npm run dev)
Una vez finalizada la instalación de paquetes, inicializa el servidor de desarrollo local provisto por Vite:
Bash
npm run dev
🌐 Acceso a la Aplicación
Cuando el servidor local se encienda con éxito, la terminal desplegará una dirección web (usualmente http://localhost:5173).
1.	Abre esa URL en tu navegador web de preferencia.
2.	Credenciales de Acceso: Al ser un prototipo académico con persistencia local simulada, el sistema de Login te otorgará acceso utilizando cualquier nombre de usuario y cualquier combinación numérica como PIN.
💾 Nota sobre los Datos: Este proyecto utiliza la persistencia de datos mediante LocalStorage. Toda acción de creación (POST), edición (PUT) o eliminación (DELETE) de productos se guardará y mantendrá directamente en el almacenamiento del navegador actual, permitiendo pruebas completas sin dependencias de APIs externas en la nube.



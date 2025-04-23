# Sistema de PQRS (Peticiones, Quejas, Reclamos y Sugerencias)

Aplicación web completa desarrollada como prueba técnica, donde los usuarios pueden enviar y consultar PQRS, y los administradores pueden gestionarlas.  
Incluye **backend en Laravel 10** y **frontend en Angular 15**, organizados en una sola estructura de repositorio.

---
## 🧰 Tecnologías utilizadas

- **Laravel ** (API RESTful)
- **Angular **
- **SQLite** como base de datos embebida (no requiere gestor externo)
- **Bootstrap 5** para la interfaz

---

## 🚀 Funcionalidades

### 👤 Cliente
- Crear una PQRS (Petición, Queja, Reclamo o Sugerencia)
- Consultar el estado y respuesta de sus solicitudes usando su email

### 🛠️ Administrador
- Ver listado de todas las PQRS
- Cambiar el estado (Pendiente, En proceso, Resuelto)
- Escribir una respuesta desde el panel de detalle

### 🧭 Página de inicio
- Selector visual con botones:
  - Ingresar como Administrador
  - Ingresar como Usuario (modal con opciones para crear o consultar)

---

## ⚙️ Cómo ejecutar el proyecto

### 🔧 Backend (Laravel)

```bash
cd sistema-pqrs
composer install
cp .env.example .env
touch database/database.sqlite
php artisan migrate
php artisan serve
```


### 🔧 Frontent (Angular)

```bash
cd sistema-pqrs-frontend
npm install
ng serve
```

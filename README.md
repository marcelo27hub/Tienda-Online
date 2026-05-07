# 🐧 Tienda Online de Pingüinos

Proyecto full-stack desarrollado con Node.js, Express, MongoDB y Pug.  
Arquitectura separada en dos aplicaciones independientes:

- 🧑‍💼 Backend: Panel de administración  
- 🛍️ Frontend: Tienda online  

Ambos servidores comparten la misma base de datos MongoDB.

---

# 📁 Estructura del proyecto

```txt id="tree_ok"
challenge-1/
├── backend/   → Panel de administrador
├── frontend/  → Tienda online
```

---

# ⚙️ Tecnologías utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- Pug (server-side rendering)
- Multer (subida de imágenes)
- Express Session

---

# 🧑‍💼 BACKEND (Admin Panel)

## 📌 Funcionalidades

- Login de administrador
- CRUD de productos
- Subida de imágenes de productos
- Visualización de pedidos
- Cambio de estado de pedidos (pendiente, enviado, cancelado)

## ▶️ Ejecución

```bash
cd backend
npm install
node server.js
```

## 🌐 URL
http://localhost:3000

---

# 🛍️ FRONTEND (Tienda Online)

## 📌 Funcionalidades

- Listado de productos
- Visualización de imágenes
- Creación de pedidos
- Envío de datos del cliente (nombre, dirección, cantidad)

## ▶️ Ejecución

```bash
cd frontend
npm install
node server.js
```

## 🌐 URL
http://localhost:4000/tienda

---

# 🗄️ Base de datos

Ambos servidores utilizan la misma base de datos MongoDB.

Configuración en env
PORT=3000
ADMIN_EMAIL=admin@gmail.com
ADMIN_PASSWORD_HASH=$2b$10$QegIGGAxkXZllN8b1Ibs.e7M4p2p.cUnIM1rVMBhUWQCVLgoiwaSC
DB_URI=tu_mongodb_uri
SESSION_SECRET=tu_secreto

---

# 📦 Subida de imágenes

Las imágenes se almacenan en:

backend/uploads/

Y se acceden desde:

http://localhost:3000/uploads/nombre.png

---

# 🧠 Notas importantes
- El frontend y backend son aplicaciones separadas
- Solo comparten la base de datos
- No se usa JavaScript en el navegador (solo Pug)
- Todo el renderizado es server-side

---

# 🐧 Autor

Proyecto desarrollado para challenge de tienda online con temática de pingüinos.
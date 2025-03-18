# Proyecto Fullstack

## Descripción
Este proyecto es una aplicación fullstack compuesta por un backend desarrollado en Node.js y un frontend desarrollado en Angular. A continuación, se documenta el proceso para ejecutar el proyecto localmente, crear la base de datos y probar el microservicio.

---

## Pasos para ejecutar el backend y frontend localmente

### Backend
1. Asegúrate de tener Node.js instalado.
2. Navega a la carpeta del backend desde la terminal.
3. Instala las dependencias ejecutando:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo con el comando:
   ```bash
   npm run dev
   ```
5. El backend estará disponible en `http://localhost:3000`.

### Frontend
1. Asegúrate de tener Angular CLI instalado globalmente:
   ```bash
   npm install -g @angular/cli
   ```
2. Navega a la carpeta del frontend desde la terminal.
3. Instala las dependencias ejecutando:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo con el comando:
   ```bash
   ng serve
   ```
5. El frontend estará disponible en `http://localhost:4200`.

---

## Comandos para crear la base de datos y la tabla en PostgreSQL

### Crear la base de datos
Ejecuta el siguiente comando SQL para crear la base de datos:
```sql
-- Database: prueba_fullstack

-- DROP DATABASE IF EXISTS prueba_fullstack;

CREATE DATABASE prueba_fullstack
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Colombia.1252'
    LC_CTYPE = 'Spanish_Colombia.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
```

### Crear la tabla tareas
Ejecuta el siguiente comando SQL para crear la tabla:
```sql
CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,              
    title VARCHAR(100) NOT NULL,        
    description TEXT NOT NULL,
    state INT NOT NULL
);
```

---

## Probar el microservicio

### Desde Postman
1. Importa la colección de API o configura manualmente los endpoints en Postman.
2. Asegúrate de que el backend esté corriendo localmente en `http://localhost:3000`.
3. Realiza peticiones al endpoint correspondiente (ejemplo: `POST /tasks` para crear una tarea).
4. Verifica las respuestas y los datos procesados.

### Desde el Frontend
1. Asegúrate de que el frontend esté corriendo localmente en `http://localhost:4200` y conectado correctamente al backend.
2. Navega a la funcionalidad correspondiente (ejemplo: formulario de registro de tareas).
3. Interactúa con la interfaz para enviar datos al backend y verifica las respuestas mostradas en el frontend.

---

## Notas adicionales
- Asegúrate de que PostgreSQL esté instalado y configurado correctamente.
- Cambia los datos de conexión a la base de datos en el archivo de configuración del backend si es necesario.


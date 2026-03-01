const express = require('express');
const mysql = require('mysql2/promise');
const path = require('path');
require('dotenv').config(); // Carga credenciales desde un archivo .env

const app = express();

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para archivos estáticos (CSS) e inputs
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Pool de conexiones (Mejor rendimiento y seguridad)
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'app_user',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10
});

// Ruta principal con manejo de errores seguro
app.get('/', async (req, res) => {
    try {
        // Uso obligatorio de Prepared Statements para seguridad
        const [rows] = await pool.execute('SELECT title, content FROM posts LIMIT 5');
        res.render('index', { posts: rows, title: 'Bienvenido a mi App' });
    } catch (err) {
        console.error("Error en DB:", err.message); // Log interno
        res.status(500).send("Algo salió mal, intenta más tarde."); // Mensaje genérico al usuario
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));

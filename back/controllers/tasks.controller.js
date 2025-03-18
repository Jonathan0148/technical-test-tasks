const pool = require('../models/db');

const getAllTasks = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tasks');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener las tareas');
    }
};

const getTaskById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).send('Tarea no encontrada');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener la tarea');
    }
};

const createTask = async (req, res) => {
    const { title, description, state } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO tasks (title, description, state) VALUES ($1, $2, $3) RETURNING *',
            [title, description, state]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creando la tarea');
    }
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, state } = req.body;
    try {
        const result = await pool.query(
            'UPDATE tasks SET title = $1, description = $2, state = $3 WHERE id = $4 RETURNING *',
            [title, description, state, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).send('Tarea no encontrado');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error actualizando la tarea');
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).send('Tarea no encontrada');
        }
        res.send('Tarea eliminada exitosamente');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error eliminando la tarea');
    }
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
};

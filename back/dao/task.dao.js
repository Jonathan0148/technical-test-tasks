const pool = require('../models/db');

/**
 * Obtiene todas las tareas de la base de datos.
 * @returns {Promise<Array>}
 */
exports.getAllTasksDAO = async () => {
  const result = await pool.query('SELECT * FROM tasks');
  return result.rows;
};

/**
 * Obtiene una tarea por su ID.
 * @param {number} id 
 * @returns {Promise<Object|null>}
 */
exports.getTaskByIdDAO = async (id) => {
  const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
  return result.rows[0] || null;
};

/**
 * Crea una nueva tarea.
 * @param {Object} task 
 * @param {string} task.title
 * @param {string} task.description 
 * @param {string} task.state 
 * @returns {Promise<Object>}
 */
exports.createTaskDAO = async (task) => {
  const { title, description, state } = task;
  const result = await pool.query(
    'INSERT INTO tasks (title, description, state) VALUES ($1, $2, $3) RETURNING *',
    [title, description, state]
  );
  return result.rows[0];
};

/**
 * Actualiza una tarea existente.
 * @param {number} id
 * @param {Object} task 
 * @returns {Promise<Object|null>}
 */
exports.updateTaskDAO = async (id, task) => {
  const { title, description, state } = task;
  const result = await pool.query(
    'UPDATE tasks SET title = $1, description = $2, state = $3 WHERE id = $4 RETURNING *',
    [title, description, state, id]
  );
  return result.rows[0] || null;
};

/**
 * Elimina una tarea.
 * @param {number} ID
 * @returns {Promise<Object|null>}
 */
exports.deleteTaskDAO = async (id) => {
  const result = await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
  return result.rows[0] || null;
};

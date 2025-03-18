const taskDAO = require('../dao/task.dao');

/**
 * Obtiene todas las tareas.
 */
exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await taskDAO.getAllTasksDAO();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

/**
 * Obtiene una tarea por ID.
 */
exports.getTaskById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const task = await taskDAO.getTaskByIdDAO(id);
    if (!task) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.json(task);
  } catch (error) {
    next(error);
  }
};

/**
 * Crea una nueva tarea.
 */
exports.createTask = async (req, res, next) => {
  try {
    const newTask = await taskDAO.createTaskDAO(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

/**
 * Actualiza una tarea existente.
 */
exports.updateTask = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedTask = await taskDAO.updateTaskDAO(id, req.body);
    if (!updatedTask) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.json(updatedTask);
  } catch (error) {
    next(error);
  }
};

/**
 * Elimina una tarea.
 */
exports.deleteTask = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedTask = await taskDAO.deleteTaskDAO(id);
    if (!deletedTask) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.json({ message: 'Tarea eliminada exitosamente' });
  } catch (error) {
    next(error);
  }
};

const express = require('express');
const { check } = require('express-validator');
const { validateTask } = require('../middlewares/validators');
const { authenticate } = require('../middlewares/auth');
const {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
} = require('../controllers/tasks.controller');

const router = express.Router();

router.use(authenticate);

router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.post(
    '/',
    [
        check('title').notEmpty().withMessage('El título es obligatorio'),
        validateTask,
    ],
    createTask
);
router.put(
    '/:id',
    [
        check('title').notEmpty().withMessage('El título es obligatorio'),
        validateTask,
    ],
    updateTask
);
router.delete('/:id', deleteTask);

module.exports = router;

const express = require('express');
// const { body } = require('express-validator');

const todoController = require('../controllers/todo');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// GET /todo/tasks
router.get('/tasks', todoController.getTasks);

// POST /todo/task
router.post('/task', todoController.createTask);

// router.get('/task/:taskId', isAuth, todoController.getTask);

// PUT /todo/task/:taskId
router.put('/task/:taskId', todoController.updateTask);

// DELETE /todo/task/:taskId
router.delete('/task/:taskId', todoController.deleteTask);

module.exports = router;
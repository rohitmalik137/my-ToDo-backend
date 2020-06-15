const express = require('express');
// const { body } = require('express-validator');

const todoController = require('../controllers/todo');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// GET /todo/tasks
router.get('/tasks', todoController.getTasks);

// POST /todo/task
router.post('/task', todoController.createTask);

// router.get('/task/:taskId', isAuth, todoController.getPost);

// router.put('/post/:postId', isAuth, todoController.updatePost);

// router.delete('/task/:taskId', isAuth, todoController.deletePost);

module.exports = router;
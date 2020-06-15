const fs = require('fs');
const path = require('path');

const Todo = require('../models/todo');

exports.getTasks = (req, res, next) => {
    Todo.find()
      .then(tasks => {
        res
          .status(200)
          .json({
            message: 'Fetched tasks successfully.',
            tasks: tasks
          });
      })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
};
  
  exports.createTask = (req, res, next) => {
    const task = req.body.task;
    const addTask = new Todo({
      task: task
    });
    addTask
      .save()
      .then(result => {
        res.status(201).json({
          message: 'Task added successfully!',
          task: result
        });
      })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
  };
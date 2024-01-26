import express from 'express'

import { createTaskController } from '../dependencies'
import { findAllTasksController } from '../dependencies'
import { findByUserIdController } from '../dependencies'
import { deleteTaskController } from '../dependencies'

export const taskRouter = express.Router()

taskRouter.post('/', createTaskController.run.bind(createTaskController))
taskRouter.get('/', findAllTasksController.run.bind(findAllTasksController))
taskRouter.get('/', findByUserIdController.run.bind(findByUserIdController))
taskRouter.delete('/:id', deleteTaskController.run.bind(deleteTaskController))




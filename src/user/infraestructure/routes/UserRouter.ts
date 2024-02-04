import express from 'express'

import { createUserController } from '../dependencies'
import { findAllUsersController } from '../dependencies';
import { deleteUserController } from '../dependencies';
import { authUserController } from '../dependencies';

export const userRouter = express.Router();

userRouter.post('/', createUserController.run.bind(createUserController))
userRouter.get('/', findAllUsersController.run.bind(findAllUsersController))
userRouter.delete('/:id', deleteUserController.run.bind(deleteUserController))
userRouter.post('/auth', authUserController.run.bind(authUserController))



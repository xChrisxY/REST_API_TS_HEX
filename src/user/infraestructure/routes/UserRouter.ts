import express from 'express'

import { createUserController } from '../dependencies'
import { findAllUsersController } from '../dependencies';

export const userRouter = express.Router();

userRouter.post('/', createUserController.run.bind(createUserController))
userRouter.get('/', findAllUsersController.run.bind(findAllUsersController))




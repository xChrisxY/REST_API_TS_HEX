import { CreateTask } from "../application/createTask";
import { FindAllTasks } from "../application/findAllTasks";
import { FindTasks } from "../application/findById";
import { DeleteTask } from "../application/deleteTask";

import { CreateTaskController } from "./controllers/createTaskController";
import { FindAllTasksController } from "./controllers/findAllTasksController";
import { FindByIdController } from "./controllers/findTasksByIdUserController";
import { DeleteTaskController } from "./controllers/deleteTaskController";

import { TaskRepositoryPrisma } from "./repositories/PrismaTaskRepository";

export const PrismaTaskRepository = new TaskRepositoryPrisma()

export const createTaskCase = new CreateTask(PrismaTaskRepository)
export const findAllTasksCase = new FindAllTasks(PrismaTaskRepository)
export const findByIdCase = new FindTasks(PrismaTaskRepository)
export const deleteTaskCase = new DeleteTask(PrismaTaskRepository)

export const createTaskController = new CreateTaskController(createTaskCase)
export const findAllTasksController = new FindAllTasksController(findAllTasksCase)
export const findByUserIdController = new FindByIdController(findByIdCase)
export const deleteTaskController = new DeleteTaskController(deleteTaskCase)
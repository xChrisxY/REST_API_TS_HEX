import { Router } from "express";
import { CreateTask } from "../../application/createTask";
import { FindAllTasks } from "../../application/findAllTasks";
import { FindTasks } from "../../application/findById";

import { TaskRepositoryPrisma } from "../../infraestructure/TaskRepository";
import { DeleteTask } from "../../application/deleteTask";

const TaskRouter = Router()
const TaskRepository = new TaskRepositoryPrisma()

const createTask = new CreateTask(TaskRepository)
const findAllTasks = new FindAllTasks(TaskRepository)
const findById = new FindTasks(TaskRepository)
const deleteTask = new DeleteTask(TaskRepository)

TaskRouter.post('/create',async (req, res) => {
      
      const { title, description, createdAt, dueDate, userId } = req.body;

      const task = await createTask.run(title, description, createdAt ,dueDate, userId)

      res.status(201).json({task})

})

TaskRouter.get('/getTasks', async (_, res) => {

      const tasks = await findAllTasks.run()
      res.status(201).json({tasks})
      
})

TaskRouter.get('/user/:id', async (req, res) => {

      const { id } = req.params;

      const tasks = await findById.run(id)
      res.status(201).json({tasks})

      
})

TaskRouter.delete('/delete/:id', async (req, res) => {

      const { id } = req.params;
      await deleteTask.run(id)
      res.status(200).json({success: true, message : 'Task deleted'})
      
})

export default TaskRouter;
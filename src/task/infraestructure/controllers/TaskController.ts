import { Router } from "express";
import { CreateTask } from "../../application/createTask";
import { FindAllTasks } from "../../application/findAllTasks";
import { FindTasks } from "../../application/findById";

import { TaskRepositoryPrisma } from "../TaskRepository";
import { DeleteTask } from "../../application/deleteTask";

const TaskRouter = Router()
const TaskRepository = new TaskRepositoryPrisma()

const createTask = new CreateTask(TaskRepository)
const findAllTasks = new FindAllTasks(TaskRepository)
const findById = new FindTasks(TaskRepository)
const deleteTask = new DeleteTask(TaskRepository)

TaskRouter.post('/', async (req, res) => {
      
      try {

            const { title, description, createdAt, dueDate, userId } = req.body;

            const task = await createTask.run(title, description, createdAt ,dueDate, userId)

            res.status(201).json({success : true, task})

      } catch (error) {
            
            console.log('Error : ' +  error)

            res.status(400).json({success : false, message: 'Something bad happened'});

      }

})

TaskRouter.get('/', async (_, res) => {

      try {

            const tasks = await findAllTasks.run()
            res.status(201).json({success : true, tasks})

      } catch (error) {

            console.error(error)
            res.status(400).json({success : false, message : 'Something bad happened'})
            
      }
      
})

TaskRouter.get('/user/:id', async (req, res) => {

      try {
            const { id } = req.params;

            const tasks = await findById.run(id)

            res.status(201).json({success : true, tasks})

      } catch (error) {
            
            res.status(400).json({success : false, message : 'Something bad happened'})

      }

})

TaskRouter.delete('/:id', async (req, res) => {

      try {

            const { id } = req.params;
            await deleteTask.run(id)
            res.status(200).json({success: true, message : 'Task deleted'})

      } catch (error) {

            console.error(error)
            res.status(400).json({success : false, message : 'Something bad happened'})
            
      }
      
})

export default TaskRouter;
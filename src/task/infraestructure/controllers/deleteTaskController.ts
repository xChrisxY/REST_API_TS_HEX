import { Request, Response } from "express";
import { DeleteTask } from "../../application/deleteTask";

export class DeleteTaskController {

      constructor(readonly DeleteTask: DeleteTask) {}

      async run(req: Request, res: Response) {

            try {
                  
                  const { id } = req.params;
                  const taskId = parseInt(id)   

                  if (isNaN(taskId)) {

                        return res.status(400).json({
                              success : false,
                              message : 'Invalid Task ID'
                        })

                  }

                  await this.DeleteTask.run(id)

                  return res.status(200).json({

                        success : true,
                        message : 'Task deleted'
                  })


            } catch (error) {

                  console.error('Error deleting Task: ', error)

                  return res.status(500).json({
                        success : false,
                        message : 'Interval error server',
                        error : error
                  })

                  
            }  

      }

}
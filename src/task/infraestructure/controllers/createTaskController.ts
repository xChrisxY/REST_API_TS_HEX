import { Request, Response } from "express";

import { CreateTask } from "../../application/createTask";

export class CreateTaskController {

      constructor(readonly CreateTask: CreateTask) { } 

      async run(req: Request, res: Response) {

            const data = req.body;

            try {
                  
                  const task = await this.CreateTask.run(
                        data.title,
                        data.description,
                        data.createdAt,
                        data.dueDate,
                        data.userId
                  )

                  if (task) {

                        res.status(200).json({
                              success : true,
                              data : {
                                    title : task.title,
                                    description : task.description,
                                    createdAt : task.createdAt,
                                    dueDate : task.dueDate,
                                    userId : task.userId
                              }
                        })

                  } else {

                        res.status(401).json({
                              success : false,
                              data : 'NO fue posible agregar la tarea',
                              
                        })


                  }

            } catch (error) {

                  res.status(500).json({
                        success : false,
                        data : 'Ocurrió un error',
                        message : error
                  })
                  
            } 

      }

}
import { Request, Response } from "express";
import { FindAllTasks } from "../../application/findAllTasks";

export class FindAllTasksController {

      constructor(readonly FindAllTasks: FindAllTasks){ }

      async run(_: Request, res: Response) {

            try {
                  
                  const tasks = await this.FindAllTasks.run()
                  
                  if (tasks.length > 0) {

                        res.status(200).json({

                              success : true,

                              data : tasks.map(task => {

                                    return {

                                          title : task.title,
                                          description : task.description,
                                          createdAt : task.createdAt,
                                          dueDate : task.dueDate,
                                          userId : task.userId

                                    }

                              })

                        })
                  
                  } else {

                        res.status(200).json({

                              success : true,
                              message : 'No se encontraron productos'

                        })

                  }

            } catch (error) {
                  
                  res.status(500).json({
                        success : false,
                        message : 'Ocurrió un error',
                        error : error
                  })

            }

      }

}


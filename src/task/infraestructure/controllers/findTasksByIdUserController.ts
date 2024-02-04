import { Request, Response } from "express";
import { FindTasks } from "../../application/findById";

export class FindByIdController {

      constructor(readonly FindTasks: FindTasks) { }

      async run(req: Request, res : Response) {

            try {
                  
                  const { id } = req.params;

                  const tasksByIdUser = await this.FindTasks.run(id)

                  if (tasksByIdUser.length > 0) {

                        res.status(200).json({

                              success : true,

                              data : tasksByIdUser.map(task => {

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
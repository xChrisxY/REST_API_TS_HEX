import { Request, Response } from "express";
import { FindTasks } from "../../application/findById";

import { PrismaClient } from "@prisma/client";

export class FindByIdController {

      private prisma: PrismaClient;

      constructor(readonly repository: FindTasks) {

            this.prisma = new PrismaClient();

      }

      async run(req: Request, res : Response) {

            try {
                  
                  const { id } = req.params;

                  const tasks = await this.prisma.task.findMany({
                        
                        where : {
      
                              userId : parseInt(id)
                        }
                  })

                  if (tasks.length > 0) {

                        res.status(200).json({

                              success : true,

                              data : tasks.map(task => {

                                    return {

                                          id : task.id,
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

            } finally {

                  await this.prisma.$disconnect()
            }

      }

      

}
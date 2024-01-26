import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { FindAllTasks } from "../../application/findAllTasks";

export class FindAllTasksController {

      private prisma: PrismaClient;

      constructor(readonly repository: FindAllTasks){

            this.prisma = new PrismaClient();
      }

      async run(_: Request, res: Response) {

            try {
                  
                  const tasks = await this.prisma.task.findMany();

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


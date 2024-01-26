import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { DeleteTask } from "../../application/deleteTask";

export class DeleteTaskController {

      private prisma: PrismaClient;

      constructor(readonly repository: DeleteTask) {

            this.prisma = new PrismaClient()

      }

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

                  const deletedTask = await this.prisma.task.delete({

                        where : {

                              id : taskId
                        }
                  })

                  if (deletedTask) {

                        return res.status(200).json({

                              success : true,
                              message : 'Task deleted'
                        })

                  } else {

                        return res.status(404).json({

                              success : false,
                              message : 'Task not found'

                        })

                  }

            } catch (error) {

                  console.error('Error deleting Task: ', error)

                  return res.status(500).json({
                        success : false,
                        message : 'Interval error server',
                        error : error
                  })

                  
            } finally {

                  await this.prisma.$disconnect();

            }

      }

}
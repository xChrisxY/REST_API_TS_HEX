import { PrismaClient } from "@prisma/client";
import { TaskRepository } from "../interfaces/repository/TaskRepository";
import { Task } from "../domain/entities/Task";

export class TaskRepositoryPrisma implements TaskRepository {

      private prisma : PrismaClient;

      constructor() { this.prisma = new PrismaClient() }

      async save(task: Task): Promise<Task> {
          
            const newTask = await this.prisma.task.create({

                  data : {

                        title : task.title!,
                        description : task.description!,
                        dueDate : new Date(task.dueDate!).toISOString(),
                        userId : task.userId!

                  }
            })

            return new Task(

                  newTask.title,
                  newTask.description,
                  newTask.createdAt,
                  newTask.dueDate,
                  newTask.userId

            )
      }

      async findAll(): Promise<Task[]> {
          
            const tasks = await this.prisma.task.findMany()
            return tasks.map(task => new Task(

                  task.title,
                  task.description,
                  task.createdAt,
                  task.dueDate,
                  task.userId

            ))

      }

      async findById(userId: string): Promise<Task[]> {
          
            const tasks = await this.prisma.task.findMany({

                  where : {
                        userId : parseInt(userId)
                  }
            })

            return tasks.map(task => new Task(

                  task.title,
                  task.description,
                  task.dueDate,
                  task.createdAt,
                  task.userId

            ))

      }

      async delete(id: string): Promise<void> {
          
            await this.prisma.task.delete({
                  where : {
                        id : parseInt(id)
                  }
            })

      }
      
}
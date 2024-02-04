import { TaskRepository } from "../domain/repository/TaskRepository";
import { Task } from "../domain/entities/Task";


export class CreateTask {

      constructor(private readonly repository: TaskRepository){}

      async run(title: string, description: string, createdAt: Date , dueDate: Date, userId: number) {

            try {

                  const task = new Task(title, description, createdAt, dueDate, userId)
                  return await this.repository.save(task)

            } catch (error) {
                  
                  console.error('Ha ocurrido un error:', error)
                  return null
            }

      }

}
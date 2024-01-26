import { TaskRepository } from "../domain/repository/TaskRepository";

export class FindAllTasks {

      constructor(private readonly repository: TaskRepository){}

      async run() {

            return await this.repository.findAll()

      }

}
import { TaskRepository } from "../interfaces/repository/TaskRepository";

export class DeleteTask {

      constructor(private readonly repository: TaskRepository) {}

      async run(id : string) {
            return await this.repository.delete(id)
      }

}
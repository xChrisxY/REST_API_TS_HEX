import { TaskRepository } from "../domain/repository/TaskRepository";

export class DeleteTask {

      constructor(private readonly repository: TaskRepository) {}

      async run(id : string) {
            return await this.repository.delete(id)
      }

}
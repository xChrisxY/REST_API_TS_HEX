import { TaskRepository } from "../interfaces/repository/TaskRepository";

export class FindTasks {

      constructor(private readonly repository: TaskRepository){}

      async run(userId: string) {

            return await this.repository.findById(userId)
            
      }

}
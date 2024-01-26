import { TaskRepository } from "../domain/repository/TaskRepository";

export class DeleteTask {

      constructor(private readonly repository: TaskRepository) {}

      async run(id : string) {

            try {

                  return await this.repository.delete(id)

            } catch (error) {
                  
                  console.error('Algo malo pasó: ', error)
                  return null
            }

      }

}
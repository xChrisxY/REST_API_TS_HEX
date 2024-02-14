import { UserRepository } from "../domain/repository/UserRepository";

export class DeleteUser {

      constructor(private readonly repository: UserRepository) {}

      async run(id : string) {

            try {
                  
                  return await this.repository.delete(id);


            } catch (error) {
                  
                  console.error('Algo malo pasó');
                  console.log(error)
                  return null;

            }

      }

}
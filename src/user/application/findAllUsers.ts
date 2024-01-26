import { UserRepository } from "../domain/repository/UserRepository";

export class FindAllUsers {

      constructor(private readonly repository: UserRepository){}

      async run() {

            try {

                  return await this.repository.findAll()

            } catch (error) {

                  console.error('Error to find all users: ', error)
                  return null
                  
            }

      }

}

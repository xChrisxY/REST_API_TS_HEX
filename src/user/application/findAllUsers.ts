import { UserRepository } from "../interfaces/repository/UserRepository";

export class FindAllUsers {

      constructor(private readonly repository: UserRepository){}

      async run() {

            return await this.repository.findAll()

      }

}

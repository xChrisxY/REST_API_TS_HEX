import { UserRepository } from "../domain/repository/UserRepository";

export class FindByUsername {

      constructor(private readonly repository: UserRepository) {}

      async run(username : string) {

            return await this.repository.findByUsername(username)

      }

}
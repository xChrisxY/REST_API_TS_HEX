import { UserRepository } from "../interfaces/repository/UserRepository"
import { User } from "../domain/entities/User"

export class CreateUser {

      constructor(private readonly repositoy: UserRepository){}

      async run(username: string, password: string, email:string): Promise<User> {

            const user = new User(username, password, email)
            return await this.repositoy.save(user)

      }


}
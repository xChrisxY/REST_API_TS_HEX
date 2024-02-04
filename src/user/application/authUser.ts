import { IEncryptService } from "../domain/repository/IEncryptRepository";
import { UserRepository } from "../domain/repository/UserRepository";

export class AuthUser {

      constructor(

            private readonly userRepository: UserRepository,
            private readonly bcryptRepository : IEncryptService,

      ){}

      async run(username : string, password : string) {

            const user = await this.userRepository.findByUsername(username)

            if (!user) {

                  throw new Error('User not found')

            }            

            const isPasswordValid = await this.bcryptRepository.authPassword(password, user?.password)

            if (!isPasswordValid) {

                  throw new Error('Password invalid')
      
            }
      
            return user

      }

}
import { UserRepository } from "../domain/repository/UserRepository"
import { User } from "../domain/entities/User"
import { IEncryptService } from "../domain/services/IEncryptRepository"

export class CreateUser {

      constructor(

            private readonly userRepositoy: UserRepository,
            private readonly bryptRepository: IEncryptService,
            

      ){}

      async run(username: string, password: string, email:string): Promise<User | null> {

            try {    
                  
                  const result = await this.userRepositoy.findByUsername(username)

                  if (result) throw new Error('User already exists')

                  const hashPassword = await this.bryptRepository.encodePassword(password)

                  const user = new User(username, hashPassword, email)

                  return await this.userRepositoy.save(user)

            } catch (error) {

                  console.error('Error to create the user: ', error)

                  return null
                  
            }

      }

}
import { IEncryptService } from "../domain/services/IEncryptRepository";
import { UserRepository } from "../domain/repository/UserRepository";
import { INotification } from "../domain/services/INotificationAuth";
import { IJWTRepository } from "../domain/services/IJWTRepository";

export class AuthUser {

  constructor(

    private readonly userRepository: UserRepository,
    private readonly bcryptRepository: IEncryptService,
    private readonly rabbitMQService: INotification,
    private readonly jwtService: IJWTRepository

  ) {}

  async run(username: string, password: string) {

    const user = await this.userRepository.findByUsername(username)

    if (!user) {

      throw new Error('User not found')

    }

    const isPasswordValid = await this.bcryptRepository.authPassword(password, user?.password)

    if (!isPasswordValid) {

      throw new Error('Password invalid')

    }
    const token = await this.jwtService.sign(user.email, '1h');
    
    user.setJWT(token)

    this.rabbitMQService.sendMessage(JSON.stringify(user.username));

    return user

  }

}

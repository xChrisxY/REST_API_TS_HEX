import { IEncryptService } from "../../domain/services/IEncryptRepository";
import bcrypt from 'bcrypt'

export class BcryptService implements IEncryptService {

      encodePassword(password : string): Promise<string> {

            const salt = bcrypt.genSaltSync(10)
            const hashedPassword = bcrypt.hash(password, salt)
            return hashedPassword

      }

      authPassword(password : string, hash : string): Promise<boolean> {

            return bcrypt.compare(password, hash)

      }

}

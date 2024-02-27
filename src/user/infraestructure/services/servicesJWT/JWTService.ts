import jwt from 'jsonwebtoken';
import { IJWTRepository } from '../../../domain/services/IJWTRepository';

export class JWTService implements IJWTRepository {

  async sign(payload: any, expiresIn: string): Promise<string> {

    return jwt.sign({ data: payload }, `${process.env.SECRET_KEY || 'clave' }`, { expiresIn: expiresIn })

  }

  async verify(token: string): Promise<any> {
      
    return jwt.verify(token, process.env.SECRET_KEY || 'clave')

  }
}

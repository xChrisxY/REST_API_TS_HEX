import { User } from "../../domain/entities/User"

export interface UserRepository {

      save(user: User): Promise<User>;
      findAll(): Promise<User[]>;
      delete(id: string): Promise<void>;
      findByUsername(username : string): Promise <User | null>;
      
}
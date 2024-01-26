import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../../domain/repository/UserRepository"
import { User } from "../../domain/entities/User";

export class UserRepositoryPrisma implements UserRepository {

      private prisma : PrismaClient;

      constructor() {
            this.prisma = new PrismaClient()
      }

      async save(user : User): Promise<User> {

            const newUser = await this.prisma.user.create({

                  data : {
                        username : user.username!,
                        password : user.password!,
                        email : user.email!,                        
                  }

            })
            
            return new User(
                  
                  newUser.username,
                  newUser.password,
                  newUser.email

            )

      }

      async findAll(): Promise<User[]> {
          
            const users = await this.prisma.user.findMany()
            return users.map(user => new User(

                  user.username,
                  user.password,
                  user.email

            ))

      }

      async disconnect(): Promise<void> {

            await this.prisma.$disconnect();

      }

}
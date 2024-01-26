import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { FindAllUsers } from "../../application/findAllUsers";

export class GetAllUsersController {

      private prisma: PrismaClient;

      constructor(readonly GetAllUsers: FindAllUsers){

            this.prisma = new PrismaClient();

      }

      async run(_: Request, res:Response) {
            
            try {
                  
                  const users = await this.prisma.user.findMany();

                  if (users.length > 0){

                        res.status(200).json({

                              success : false,
                              
                              data : users.map(user => {

                                    return {

                                          id : user.id,
                                          username : user.username,
                                          password : user.password,
                                          email : user.email

                                    }

                              })
                        })

                  } else {

                        res.status(400).json({
                              success : true,
                              message : 'No se encontraron productos'
                        })

                  }

            } catch (error) {

                  res.status(500).json({
                        success : false,
                        message : 'Ocurrió un error',
                        error : error
                  })
                  
            } finally {

                  await this.prisma.$disconnect();

            }

      }


}

import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import { CreateUser } from "../../application/createUser";

export class CreateUserController {

      private prisma: PrismaClient;

      constructor(readonly CreateUser: CreateUser) {

            this.prisma = new PrismaClient();

      }

      async run(req: Request, res: Response) {

            const data = req.body;

            try {
                  const user = await this.CreateUser.run(
                        data.username,
                        data.password,
                        data.email
                  );

                  if (user) {

                        res.status(201).json({
                              success : true,
                              data : {
                                    username : user.username,
                                    password : user.password,
                                    email : user.email
                              }
                        });

                  } else {

                        res.status(401).json({
                              success : false,
                              data : 'NO fue posible agregar al usuario',
                              
                        })

                  }


            } catch (error) {

                  res.status(500).json({
                        success : false,
                        data : 'Ocurrió un error',
                        message : error
                  })
                  
            } finally {

                  await this.prisma.$disconnect();

            }

      }

}
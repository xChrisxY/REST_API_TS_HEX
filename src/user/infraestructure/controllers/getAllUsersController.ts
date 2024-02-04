import { Request, Response } from "express";
import { FindAllUsers } from "../../application/findAllUsers";

export class GetAllUsersController {

      constructor(readonly GetAllUsers: FindAllUsers){ }

      async run(_: Request, res:Response) {
            
            try {
                  
                  const users = await this.GetAllUsers.run();

                  if (users.length > 0){

                        res.status(200).json({

                              success : false,
                              
                              data : users.map(user => {

                                    return {

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
                  
            }

      }


}

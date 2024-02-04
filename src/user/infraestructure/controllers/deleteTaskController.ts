import { Request, Response } from "express";
import { DeleteUser } from "../../application/deleteUser";

export class DeleteUserController {

      constructor (readonly DeleteUser : DeleteUser) {}

      async run(req: Request, res: Response) {

            try {
                  
                  const { id } = req.params;
                  const userId = parseInt(id);

                  if (isNaN(userId)) {

                        return res.status(400).json({
                              success : false,
                              message : 'Invalid User ID'
                        })

                  }

                  await this.DeleteUser.run(id);

                  return res.status(200).json({

                        success : true,
                        message : 'User deleted'
                  })


            } catch (error) {
                  
                  console.error('Error deleting User: ', error)

                  return res.status(500).json({
                        success : false,
                        message : 'Interval error server',
                        error : error
                  })

            }


      }

}
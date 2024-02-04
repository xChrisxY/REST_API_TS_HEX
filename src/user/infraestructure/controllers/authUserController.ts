import { Request, Response } from "express";
import { AuthUser } from "../../application/authUser";

export class AuthUserController {

      constructor(private readonly authUser : AuthUser){}

      async run(req: Request, res : Response) {

            const { username, password } = req.body;

            try {
                  
                  const user = await this.authUser.run(username, password)

                  res.status(200).json({success : true, user})

            } catch (error : any) {

                  const { message } = error

                  res.status(400).json({message : 'Ha ocurrido un error', error : message})
                  
            }

      }

}
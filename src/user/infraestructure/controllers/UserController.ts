import { Router } from "express";
import { CreateUser } from "../../application/createUser";
import { FindAllUsers } from "../../application/findAllUsers";
import { UserRepositoryPrisma } from "../repositories/UserRepository";

const UserRouter = Router()
const UserRepository = new UserRepositoryPrisma()

const createUser = new CreateUser(UserRepository)
const findAllUsers = new FindAllUsers(UserRepository)

UserRouter.post('/', async (req, res) => {
      
      try {

            const { username, password, email } = req.body;
            const user = await createUser.run(username, password, email)
            res.status(201).json({user})

      } catch (error) {

            console.error(error)
            res.status(400).json({success : false, message : 'Something bad happened'})
            
      }

})

UserRouter.get('/', async (_, res) => {

      const users = await findAllUsers.run()
      res.status(200).json({success : true, users})

})

export default UserRouter;
import { Router } from "express";
import { CreateUser } from "../../application/createUser";
import { FindAllUsers } from "../../application/findAllUsers";
import { UserRepositoryPrisma } from "../../infraestructure/UserRepository";

const UserRouter = Router()
const UserRepository = new UserRepositoryPrisma()

const createUser = new CreateUser(UserRepository)
const findAllUsers = new FindAllUsers(UserRepository)

UserRouter.post('/create', async (req, res) => {
      
      console.log(req.body)
      const { username, password, email } = req.body;
      const user = await createUser.run(username, password, email)
      res.status(201).json({user})

})

UserRouter.get('/getAll', async (_, res) => {

      const users = await findAllUsers.run()
      res.status(200).json({users})

})

export default UserRouter;
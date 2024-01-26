import { CreateUser } from "../application/createUser";
import { FindAllUsers } from "../application/findAllUsers";

import { CreateUserController } from "./controllers/createUserController";
import { GetAllUsersController } from "./controllers/getAllUsersController";

import { UserRepositoryPrisma } from "./repositories/PrismaUserRepository";

export const PrismaUserRepository = new UserRepositoryPrisma()

export const createUserCase = new CreateUser(PrismaUserRepository);
export const getAllUsersCase = new FindAllUsers(PrismaUserRepository)

export const createUserController = new CreateUserController(createUserCase);
export const findAllUsersController = new GetAllUsersController(getAllUsersCase)







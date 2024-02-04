import { CreateUser } from "../application/createUser";
import { FindAllUsers } from "../application/findAllUsers";
import { DeleteUser } from "../application/deleteUser";

import { CreateUserController } from "./controllers/createUserController";
import { GetAllUsersController } from "./controllers/getAllUsersController";
import { DeleteUserController } from "./controllers/deleteTaskController";

import { UserRepositoryPrisma } from "./repositories/PrismaUserRepository";
import { BcryptService } from "./services/EncryptService";

import { AuthUser } from "../application/authUser";
import { AuthUserController } from "./controllers/authUserController";

export const PrismaUserRepository = new UserRepositoryPrisma()
export const bcryptRepository = new BcryptService()

export const authUserCase = new AuthUser(PrismaUserRepository, bcryptRepository)
export const authUserController = new AuthUserController(authUserCase)

export const createUserCase = new CreateUser(PrismaUserRepository, bcryptRepository);
export const getAllUsersCase = new FindAllUsers(PrismaUserRepository)
export const deleteUserCase = new DeleteUser(PrismaUserRepository);

export const createUserController = new CreateUserController(createUserCase);
export const findAllUsersController = new GetAllUsersController(getAllUsersCase)
export const deleteUserController = new DeleteUserController(deleteUserCase)







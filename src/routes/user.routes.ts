import { Router } from "express";
import { authUser } from "../middlewares/authUser.middleware";

const routes = Router()

import userCreateController from "../controllers/user/userCreate.controller";
import userListController from "../controllers/user/userList.controller"
import userListOneController from "../controllers/user/userListOne.controller"
import userLoginController from "../controllers/user/userLogin.controller"
import userDeleteSelfController from "../controllers/user/userDeleteSelf.controller"
import userUpdateController from "../controllers/user/userUpdatePassword.controller"

routes.post('/users', userCreateController)
routes.post('/users/login', userLoginController)
routes.get('/users', authUser, userListController)
routes.get('/users/me', authUser, userListOneController)
routes.delete('/users/me', authUser, userDeleteSelfController)
routes.patch('/users/me/updatePassword', authUser, userUpdateController)


export default routes
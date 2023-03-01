import { Router } from "express";
import { deleteController } from "./controllers/DeleteController";
import { listaController } from "./controllers/ListaController";
import { loginController } from "./controllers/LoginController";
import { updateController } from "./controllers/UpdateController";

import { userController } from "./controllers/CadastroController";
import { authMiddlewareListar, authMiddlewareDelete, authMiddlewareUpdate } from "./middlewares/authMiddleware";



const routes = Router()

routes.post('/user', new userController().create)
routes.post('/login', new loginController().login)
routes.put('/user/:id',  authMiddlewareUpdate, new updateController().updateUser)
routes.delete('/user/:id', authMiddlewareDelete, new deleteController().deleteUser)
routes.get('/profile', authMiddlewareListar, new listaController().getProfile)


export default routes
import { Router } from "express";
import UserController from "./controllers/UserController";
import userController from './controllers/UserController';

const routes = Router();

routes.get('/users', userController.index);
routes.get('/users/create', UserController.create);

export default routes;
import { Router } from "express";
import { createUserController, getUsersController } from "./controller";

const router = Router();

router.post('/', createUserController);

router.get('/', getUsersController)

export { router };

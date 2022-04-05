import { Request, Response } from "express";
import { UserTypes } from "../repositories/interfaces";
import { UserRepository } from "../repositories/user.repository";

const getUsersController = async (req: Request, res: Response) => {

const users: UserTypes[] = await new UserRepository().findUsers()

return res.status(200).json(users);
}

export default getUsersController;

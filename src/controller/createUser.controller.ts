import { Request, Response } from "express";
import { UserTypes } from "../repositories/interfaces";
import { UserRepository } from "../repositories/user.repository";

const createUserController = async (req: Request, res: Response) => {
  
  const user: UserTypes = await new UserRepository().saveUser(req.body);

  return res.status(201).json(user)
}

export default createUserController;

import { Request, Response } from 'express';
import * as userService from '../handlers/userHandler';

export const getUsers = async (req: Request, res: Response) => {
  const pageNumber = parseInt(req.query.pageNumber as string) || 0;
  const pageSize = parseInt(req.query.pageSize as string) || 10;
  const users = await userService.getUsers(pageNumber, pageSize);
  res.json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const user = await userService.getUserById(parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = await userService.createUser(name, email);
  res.status(201).json(user);
};

export const getUsersCount = async (req: Request, res: Response) => {
  const count = await userService.getUsersCount();
  res.json({ count });
};
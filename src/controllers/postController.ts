import { Request, Response } from 'express';
import * as postService from '../handlers/postHandler';

export const getPostsByUserId = async (req: Request, res: Response) => {
  const posts = await postService.getPostsByUserId(parseInt(req.query.userId as string));
  res.json(posts);
};

export const createPost = async (req: Request, res: Response) => {
  const { title, body, userId } = req.body;
  const post = await postService.createPost(title, body, userId);
  res.status(201).json(post);
};

export const deletePost = async (req: Request, res: Response) => {
  await postService.deletePost(parseInt(req.params.id));
  res.status(204).send();
};
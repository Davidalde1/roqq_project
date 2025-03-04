import Post from '../models/post';

export const getPostsByUserId = async (userId: number) => {
  return await Post.findAll({ where: { userId } });
};

export const createPost = async (title: string, body: string, userId: number) => {
  return await Post.create({ title, body, userId });
};

export const deletePost = async (id: number) => {
  return await Post.destroy({ where: { id } });
};
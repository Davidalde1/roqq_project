import User from '../models/user';
import Address from '../models/address';

export const getUsers = async (pageNumber: number, pageSize: number) => {
  return await User.findAll({
    limit: pageSize,
    offset: pageNumber * pageSize,
    include: [Address],
  });
};

export const getUserById = async (id: number) => {
  return await User.findByPk(id, { include: [Address] });
};

export const createUser = async (name: string, email: string) => {
  return await User.create({ name, email });
};

export const getUsersCount = async () => {
  return await User.count();
};
import Address from '../models/address';

export const getAddressByUserId = async (userId: number) => {
  return await Address.findOne({ where: { userId } });
};

export const createAddress = async (street: string, city: string, userId: number) => {
  return await Address.create({ street, city, userId });
};

export const updateAddress = async (userId: number, street: string, city: string) => {
  return await Address.update({ street, city }, { where: { userId } });
};
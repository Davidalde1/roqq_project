import { Request, Response } from 'express';
import * as addressService from '../handlers/addressHandler';

export const getAddressByUserId = async (req: Request, res: Response) => {
  const address = await addressService.getAddressByUserId(parseInt(req.params.userID));
  if (address) {
    res.json(address);
  } else {
    res.status(404).json({ message: 'Address not found' });
  }
};

export const createAddress = async (req: Request, res: Response) => {
  const { street, city, userId } = req.body;
  const address = await addressService.createAddress(street, city, userId);
  res.status(201).json(address);
};

export const updateAddress = async (req: Request, res: Response) => {
  const { street, city } = req.body;
  const userId = parseInt(req.params.userID);
  const address = await addressService.updateAddress(userId, street, city);
  res.json(address);
};
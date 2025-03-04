import express from 'express';
import * as userController from '../controllers/userController';

const router = express.Router();

router.get('/', userController.getUsers);
router.get('/count', userController.getUsersCount);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);

export default router;
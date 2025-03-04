import express from 'express';
import * as addressController from '../controllers/addressController';

const router = express.Router();

router.get('/:userID', addressController.getAddressByUserId);
router.post('/', addressController.createAddress);
router.patch('/:userID', addressController.updateAddress);

export default router;
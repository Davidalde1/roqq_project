import express from 'express';
import * as postController from '../controllers/postController';

const router = express.Router();

router.get('/', postController.getPostsByUserId);
router.post('/', postController.createPost);
router.delete('/:id', postController.deletePost);

export default router;
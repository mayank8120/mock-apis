import express from 'express';
import { createUser, deleteUser, getAll, getUserWithId, updateUserWithId } from '../controllers/users.js';

const router = express.Router();

router.get('/', getAll);
router.post('/', createUser);
router.get('/:id', getUserWithId);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUserWithId);

export default router;
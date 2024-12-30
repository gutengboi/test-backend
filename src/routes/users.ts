import { Router } from 'express';
import { users } from '../data/users';

const router = Router();

// Fetch all users
router.get('/', (req, res) => {
  res.status(200).json(users);
});

// Fetch single user by ID
router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

export default router;

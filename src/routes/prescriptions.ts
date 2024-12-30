import { Router } from 'express';
import { prescriptions } from '../data/prescriptions';

const router = Router();


router.get('/', (req, res) => {
  res.status(200).json(prescriptions);
});

router.get('/:userId', (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const userPrescriptions = prescriptions.filter(p => p.userId === userId);

  if (userPrescriptions.length > 0) {
    res.status(200).json(userPrescriptions);
  } else {
    res.status(404).json({ message: 'No prescriptions found for this user' });
  }
});

export default router;

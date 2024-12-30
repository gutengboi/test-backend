import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users';
import prescriptionRoutes from './routes/prescriptions';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/prescriptions', prescriptionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

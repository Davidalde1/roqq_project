import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import sequelize from './config/database';
import userRoutes from './routes/userRoutes';
import addressRoutes from './routes/addressRoutes';
import postRoutes from './routes/postRoutes';


dotenv.config();


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
app.use('/addresses', addressRoutes);
app.use('/posts', postRoutes);

// Database synchronization
const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running`);
  });
}).catch((error) => {
  console.log(error);
});
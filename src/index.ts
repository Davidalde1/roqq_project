import express from 'express';
import cors from 'cors';
const app = express();
import dotenv from 'dotenv';
import sequelize from './config/database';



dotenv.config();

//use the exported router
import userRoutes from './routes/userRoutes';
import addressRoutes from './routes/addressRoutes';
import postRoutes from './routes/postRoutes';



app.use(cors());
//use the router
app.use(express.json());

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
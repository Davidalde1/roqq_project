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

app.use(cors());
app.use(bodyParser.json());

//Routes
app.use('/api/users', userRoutes);
app.use('/api/addresses', addressRoutes);
app.use('/api/posts', postRoutes);

// Database synchronization 
const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running");
  });
}).catch((error) => {
  console.error(error);
});
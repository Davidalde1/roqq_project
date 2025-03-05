import express from 'express';
import cors from 'cors';
const app = express();
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import sequelize from './config/database';


dotenv.config();


import userRoutes from './routes/user';
import addressRoutes from './routes/address';
import postRoutes from './routes/post';




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
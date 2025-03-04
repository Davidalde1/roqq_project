import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
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
app.use(bodyParser.json());

// Routes
app.use('/api/user', userRoutes);
app.use('/api/address', addressRoutes);
app.use('/api/post', postRoutes);

// Database synchronization
const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running`);
  });
}).catch((error) => {
  console.log(error);
});
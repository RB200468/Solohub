import express from 'express';
import userRouter from './routes/userRouter'
import infoRouter from './routes/infoRouter'
import errorHandler from "./middlewares/errorHandler"
import clientRouter from './routes/clientRouter';

const app = express();

// Parse JSON
app.use(express.json());

// Routers
app.use('/info',infoRouter);
app.use('/user',userRouter);
app.use('/client',clientRouter);

// Handle Errors
app.use(errorHandler)


export default app;

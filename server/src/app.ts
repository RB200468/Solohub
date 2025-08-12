import express from 'express';
import userRouter from './routes/userRouter'
import infoRouter from './routes/infoRouter'
import errorHandler from "./middlewares/errorHandler"

const app = express();

// Parse JSON
app.use(express.json());

// Routers
app.use('/info',infoRouter);
app.use('/user',userRouter);

// Handle Errors
app.use(errorHandler)


export default app;

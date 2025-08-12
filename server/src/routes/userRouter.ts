import { Router, Request, Response, NextFunction } from 'express';
import prisma from '../prisma';

const userRouter = Router();

// Get All Users
userRouter.get('/all', async (req:Request, res:Response) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

// Get User
userRouter.get('/:id', async (req:Request, res:Response) => {
    const {id} = req.params;
    const user = await prisma.user.findFirst({
        where: {
            id: Number(id)
        }
    });
    res.json(user);
});

// Create User
userRouter.post('/', async (req:Request, res:Response) => {
    const {name, email, password} = req.body;
    const result = await prisma.user.create({
        data: {
            name,
            email,
            password
        }
    });
    res.json(result)
});

// Delete User
userRouter.delete('/:id', async (req:Request, res:Response) => {
    const {id} = req.params;
    const user = await prisma.user.delete({
        where: {
            id: Number(id)
        }
    });
    res.json(user)
});

export default userRouter;

import {Router, Request, Response} from "express"
import prisma from '../prisma';

const clientRouter = Router();


// Get All Clients
clientRouter.get('/all', async (req:Request, res:Response) => {
    const clients = await prisma.client.findMany({
        select: {
            id: true,
            user: {
                select: { name: true }
            }
        }
    });
    res.status(200).json(clients);
});


// Get Client
clientRouter.get('/:id', async (req:Request, res:Response) => {
    const {id} = req.params;
    const client = await prisma.client.findFirst({
        where: {
            id: Number(id)
        }
    });
    res.status(200).json(client);
});


// Create Client
clientRouter.post('/', async (req:Request, res:Response) => {
    const { name, email, password } = req.body
    const newClient = await prisma.client.create({
        data : {
            user : {
                create: {
                    name: name,
                    email: email,
                    password: password
                }
            },
        },
        include: {
            user: true
        }
    });
    res.status(201).json(newClient)
});


// Delete Client
clientRouter.delete('/:id', async (req:Request,res:Response) =>{
    const {id} = req.params;
    const deletedClient = await prisma.client.delete({
        where: {
            id: Number(id)
        }
    });
    res.status(200).json({
        message:"Successfully deleted"
    });
});


export default clientRouter;
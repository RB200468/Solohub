import {Router, Request, Response} from "express"
import prisma from '../prisma';

const businessRouter = Router();


// Get All Businesses
businessRouter.get('/all', async (req:Request, res:Response) => {
    const businesses = await prisma.business.findMany({
        select: {
            id: true,
            user: {
                select: { name: true }
            }
        }
    });
    res.status(200).json(businesses);
});


// Get Business
businessRouter.get('/:id', async (req:Request, res:Response) => {
    const {id} = req.params;
    const business = await prisma.business.findFirst({
        where: {
            id: Number(id)
        }
    });

    if (!business) {
        return res.status(404).json({
            message: "Business not found"
        })
    }

    res.status(200).json(business);
});


// Create Business
businessRouter.post('/', async (req:Request, res:Response) => {
    const { name, email, password } = req.body
    const newBusiness = await prisma.business.create({
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
    res.status(201).json({
        message: "Successfully created business"
    })
});


// Delete Business
businessRouter.delete('/:id', async (req:Request,res:Response) =>{
    const {id} = req.params;

    const business = await prisma.business.findUnique({
        where:{
            id: Number(id)
        },
        select:{
            userId: true
        }
    });

    if (!business) {
        return res.status(404).json({
            message: "Business not found"
        })
    };

    await prisma.user.delete({
        where: {
            id: business.userId
        }
    });

    res.status(200).json({
        message:"Successfully deleted business"
    });
});


export default businessRouter;
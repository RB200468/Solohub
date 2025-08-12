import {Request, Response, Router} from "express"

const infoRouter = Router();

// Check health
infoRouter.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK' });
});

export default infoRouter;
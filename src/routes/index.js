import { Router } from 'express';

import authRoutes from './authRoutes';
import userRoutes from './userRoutes';
import classRoutes from './classRoutes';
import formationRoutes from './formationRoutes';
import courRoutes from './courseRoutes';

const router = Router();

router.get('/', (req, res) => {
  res.json({ api: 'ok' });
});

authRoutes(router);
userRoutes(router);
classRoutes(router);
formationRoutes(router);
courRoutes(router);

export default router;

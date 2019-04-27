import { Router } from 'express';

import authRoutes from "./authRoutes";
import userRoutes from "./userRoutes";
import classeRoutes from "./classeRoutes";
import formationRoutes from "./formationRoutes";
import courRoutes from "./courRoutes";



const router = Router();

router.get("/", (req, res) => {
  res.json({ api: "ok" });
});

authRoutes(router);
userRoutes(router);
classeRoutes(router);
formationRoutes(router);
courRoutes(router);

export default router;

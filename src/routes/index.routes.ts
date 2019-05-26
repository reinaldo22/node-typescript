import {Router} from "express";
const router  = Router();

import { rotaIndex } from "../controllers/index.controllers"

//rota geral
router.route('/')
    .get(rotaIndex);

export default router;
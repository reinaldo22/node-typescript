import {Router} from "express";
const router = Router();

import {getArtigos, creatArtigos, getArtigosId, deleteArtigos, updateArtigos} from "../controllers/artigos.controllers"


router.route('/')
    .get(getArtigos)
    .post(creatArtigos);

router.route('/:id')
    .get(getArtigosId)
    .delete(deleteArtigos)
    .put(updateArtigos);

export default router;
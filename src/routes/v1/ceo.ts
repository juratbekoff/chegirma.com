import { Router } from "express";
import { ceoAuth } from "../../controllers/ceo/index"

const router = Router()

// ceo auth
router.post('/auth', ceoAuth.createCeoAuth)
router.post('/auth/login', ceoAuth.getAllCeos)


export default router


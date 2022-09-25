import express from "express";
import cors from 'cors'
import v1 from "./v1/mainRoute"

const router = express()

router.use(cors())
router.use(express.json())
router.use(express.urlencoded( { extended: true }))

router.use('/v1',v1)

export default router


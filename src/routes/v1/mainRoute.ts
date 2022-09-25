import express from "express";
import cors from 'cors'
import ceo from "./ceo"

const router = express()

router.use(cors())
router.use(express.json())
router.use(express.urlencoded( { extended: true }))

router.use('/ceo', ceo)

export default router


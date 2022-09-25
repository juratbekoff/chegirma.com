import { Request, Response } from "express";
import { PrismaClient, ceoAuth } from "@prisma/client";

import  { ceoAuthorizaton } from "../../services/ceo/index"

class CeoAuthController {

    async createCeoAuth (req: Request, res: Response) {
        try {
            let ceoAuth: ceoAuth = {
                id: 0,
                avatar: req.body.avatar,
                name: req.body.name,
                lastname: req.body.lastname,
                username: req.body.username,
                password: req.body.password,
                role: req.body.role,
                created_at: new Date(),
                updated_at: new Date()
            }
    
            ceoAuthorizaton.createCeoLogin(ceoAuth)
                    return res.status(200).json({message: "User successfully created!"})
        } catch (error) {
            return res.status(500).send({ message: "Internal Server Error!", error})
        }
    }

    async getAllCeos (req: Request, res: Response) {
        try {
            let ceologins = ceoAuthorizaton.getAllCeos()
                return res.status(200).json({ message: 'All ceo logins', ceologins})
        } catch (error) {
            console.log(error);
                return res.status(500).send({ message: "Internal Server Error!", error})
        }
    }
}


export default CeoAuthController
import { PrismaClient, ceoAuth } from "@prisma/client";

const client =  new PrismaClient()

class CeoAuth {

    async createCeoLogin (ceoAuth: ceoAuth): Promise<ceoAuth> {
        return client.ceoAuth.create({
            data: {
                avatar: ceoAuth.avatar,
                name: ceoAuth.name,
                lastname: ceoAuth.lastname,
                username: ceoAuth.username,
                password: ceoAuth.password,
                role: ceoAuth.role,
                created_at: ceoAuth.created_at,
                updated_at: ceoAuth.updated_at,
            }
        })
    }

    async getAllCeos () {
        return client.ceoAuth.findMany({
            select: {
                id: true,
                avatar: true,
                name: true,
                lastname: true,
                username: false,
                password: false,
                role: false,
                created_at: true,
                updated_at: true,
            }
        })
    }
}

export default CeoAuth
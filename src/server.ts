import express from "express";
import cors from 'cors'
import router from "./routes/router"

require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded( { extended: true }))

app.use('/api', router)

try {
    const PORT = process.env.PORT || 9090
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}`)
}) 
} catch (error) {
    console.log(error);
}

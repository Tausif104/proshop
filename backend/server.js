import express from 'express'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import productRoute from './routes/productRoute.js'

dotenv.config()

connectDB()

const app = express()

app.use('/api/products', productRoute)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(
        `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
)

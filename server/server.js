import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connect from './configs/mango.js'
import { clerkWebhooks, stripeWebhooks } from './controllers/webhooks.js'
import educatorRouter from './routes/educatorRoutes.js'
import { clerkMiddleware } from '@clerk/express'
import connectCloudinary from './configs/cloudinary.js'
import courseRouter from './routes/courseRoute.js'
import userRouter from './routes/userRoutes.js'

//initialize Express
const app = express()

// Connect to database
await connect()
await connectCloudinary()

//Middlewares
app.use(cors({
  origin: 'https://akshayas23.github.io',
  credentials: true
}));

app.use(clerkMiddleware())

//Routes
app.get('/', (req, res)=> res.send("API Working"))
app.post('/clerk' ,express.json(), clerkWebhooks)
app.use('/api/educator', express.json(), educatorRouter)
app.use('/api/course', express.json(), courseRouter)
app.use('/api/user', express.json(), userRouter)
app.post('/stripe', express.raw({ type: 'application/json' }), stripeWebhooks)

//port
const PORT = process.env.PORT || 5000

app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})
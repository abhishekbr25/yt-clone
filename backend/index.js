import express from 'express'
import cookieParser from 'cookie-parser'
import authRouter from './routes/authRoute.js'
import userRouter from './routes/userRoute.js'
import videoRouter from './routes/videoRoutes.js'
const app = express()
const port = 3001

import { connectdb } from './db/index.js'
import { verifyUser } from './Middlewares/verifyUser.js'
connectdb();
// console.log(process.env.mongo)

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRouter) 
app.use('/api/user', userRouter)
app.use('/api/video', videoRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


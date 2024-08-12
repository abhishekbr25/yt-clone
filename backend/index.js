import express from 'express'
import cookieParser from 'cookie-parser'
import authRoute from './routes/authRoute.js'
import userRouter from './routes/user.js'
const app = express()
const port = 3001

import { connectdb } from './db/index.js'
connectdb();

app.use(express.json())

app.use(cookieParser())

app.use('/', authRoute) 

app.use('/api/user', userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


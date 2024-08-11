import express from 'express'
const app = express()
const port = 3001

import { connectdb } from './db/index.js'
connectdb();

import userRouter from './routes/user.js'
app.use('/api/user', userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
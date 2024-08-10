import express from 'express'
import userRouter from './routes/user.js'
const app = express()
const port = 3002

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/user', userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
import express from 'express'
import UserRouter from './user/interfaces/controllers/UserController'
import TaskRouter from './task/interfaces/controllers/TaskController'

const app = express()

app.use(express.json())

app.use('/api/users', UserRouter)
app.use('/api/tasks', TaskRouter)


app.listen(3000, () => {
      console.log('Server running on port 3000')
})
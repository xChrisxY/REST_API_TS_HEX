import express from 'express'
import UserRouter from './user/infraestructure/controllers/UserController'
import TaskRouter from './task/infraestructure/controllers/TaskController'

const app = express()
app.disabled('x-powered-by')

app.use(express.json())

app.use('/api/users', UserRouter)
app.use('/api/tasks', TaskRouter)


app.listen(3000, () => {
      console.log('Server running on port 3000')
})
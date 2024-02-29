import express from 'express'
import cors from 'cors';

import { userRouter } from './user/infraestructure/routes/UserRouter'
import { taskRouter } from './task/infraestructure/routes/TaskRoter'

const app = express()
app.disabled('x-powered-by')

app.use(express.json())
app.use(cors())

app.use('/api/users', userRouter)
app.use('/api/tasks', taskRouter)

app.listen(3000, () => {

      console.log('Server running on port 3000')
      
});
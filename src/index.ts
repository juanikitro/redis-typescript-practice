import express from 'express'
import { charactersRouter } from './character'
import responseTime from 'response-time'

const app = express()

app.use(responseTime())
app.use('/character', charactersRouter)

app.listen(3000)
console.log('Server on port 3000')

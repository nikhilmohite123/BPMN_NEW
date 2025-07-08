import express from 'express'
import { login } from './loginCtrl.js'

const loginRoute = express.Router();

loginRoute.post('/login', login)

export default loginRoute;
import express, { Router } from 'express'
import { registerController } from '../controllers/auth.controller'

const authRoutes = Router()
// algum momento isso vai virar post
authRoutes.get('/register', registerController)

export default authRoutes

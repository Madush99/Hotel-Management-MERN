import express from 'express'
const  router = express.Router()
import { insertConInside } from '../controllers/conInsideController.js'

router.post('/addConferenceInside', insertConInside)
export default router
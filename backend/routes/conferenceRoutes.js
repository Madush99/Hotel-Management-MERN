import express from 'express'
const  router = express.Router()
import { insertCon, getAllConDetails, getConDetailsById, updateConDetails, deleteConDetails } from '../controllers/conferenceController.js'

router.post('/addConference', insertCon)
router.get('/', getAllConDetails)
router.get('/:id', getConDetailsById)
router.put('/:id', updateConDetails)
router.delete('/:id', deleteConDetails)

export default router
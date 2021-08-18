import express from 'express'
const  router = express.Router()
import { insertWedding, getAllWedDetails, getWedDetailsById, updateWedDetails, deleteWedDetails } from '../controllers/weddingController.js'

router.post('/addWedding', insertWedding)
router.get('/', getAllWedDetails)
router.get('/:id', getWedDetailsById)
router.put('/:id', updateWedDetails)
router.delete('/:id', deleteWedDetails)

export default router
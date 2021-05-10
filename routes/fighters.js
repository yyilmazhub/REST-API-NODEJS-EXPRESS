import express from 'express';
import{createFighter, getFighters, getFighterById, deleteFighter, updateFighter} from '../controllers/fighters.js';
const router = express.Router();

router.get('/', getFighters);
router.post('/', createFighter);
router.get('/:id', getFighterById);
router.delete('/:id', deleteFighter);
router.patch('/:id', updateFighter)
export default router;
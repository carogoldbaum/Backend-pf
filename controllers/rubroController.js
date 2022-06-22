import { Router } from 'express';
import { RubroService } from '../services/rubroService.js';

const router = Router();
const rubroService = new RubroService();

router.get('', async (req, res) => {
  console.log(`This is a get operation`);
  
  const rubro = await rubroService.getRubro(req.query.Rubro);

  return res.status(200).json(rubro);
});

export default router;

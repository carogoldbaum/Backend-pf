import { Router } from 'express';
import { RubroService } from '../services/rubroService.js';
const router = Router();
const rubroService = new RubroService();

/**
 * @swagger
 *  tags:
 *    name: Rubro
 *    description: Endpoint rubro
 */

/**
 * @swagger
 * /Rubro:
 *   get:
 *     summary: gets rubros 
 *     tags: [Rubro]
 *     parameters:
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Rubros by its codigo
 *       400:
 *         description: Rubros can not be found
 */
 
router.get('/rubro', async (req, res) => {
  
  const rubro = await rubroService.getRubro();

  return res.status(200).json(rubro);
});

export default router;

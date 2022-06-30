import { Router } from 'express';
import { RubroService } from '../services/rubroService.js';

const router = Router();
const rubroService = new RubroService();

/**
 * @swagger
 * components:
 *  schemas:
 *    Rubro:
 *      type: object
 *      properties:
 *        rubro:
 *          type: string
 *          descripcion: nombre de rubro
 *       required:
 *        - rubro
 *       ejemplo:
 *        rubro: "Pintor"
 */

/**
 * @swagger
 * /api/usuario:
 *  get:
 *    description: Devuelve todos los rubros
 *     tags: [Rubro]	
 *     responses:
 *      200:
 *        description: Todos los rubros
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Rubro'
 */
router.get('/', async (req, res) => {
  console.log(`This is a get operation`);
  
  const rubro = await rubroService.getRubro();

  return res.status(200).json(rubro);
});

export default router;

import { Router } from 'express';
import { UsuarioService } from '../services/usuarioService.js';

const router = Router();
const usuarioService = new UsuarioService();

/**
 * @swagger
 *  tags:
 *    name: Usuario
 *    description: Endpoint usuario
 */

/**
 * @swagger
 * /Usuario:
 *   post:
 *     summary: Create a new Usuario
 *     tags: [Usuario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: ''
 *     responses:
 *       200:
 *         description: The usuario was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: ''
 *       500:
 *         description: Some server error
 */
router.post('', async (req, res) => {
  console.log(`This is a post operation`);

  const usuario = await usuarioService.createUsuario(req.body);

  return res.status(201).json(usuario);
});

export default router;
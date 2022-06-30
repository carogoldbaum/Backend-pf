import { Router } from 'express';
import { UsuarioService } from '../services/usuarioService.js';

const router = Router();
const usuarioService = new UsuarioService();

/**
 * @swagger
 * components:
 *  schemas:
 *    Usuario:
 *      type: object
 *      properties:
 *        nombre:
 *          type: string
 *          descripcion: nombre de usuario
 *        apellido: 
 *          type: string
 *          descripcion: apellido de usuario
 *        edad:
 *          type: integer
 *          descripcion: edad de usuario
 *        mail: 
 *          type: string
 *          descripcion: mail de usuario
 *       required:
 *        - nombre
 *        - apellido
 *        - edad
 *        - mail
 *       ejemplo:
 *        nombre: Alberto
 *        apellido: Perez
 *        edad: 25
 *        mail: albertoperez25@mail.com
 */

/**
 * @swagger
 * /api/usuario:
 *  post:
 *    description: Crea un nuevo usuario
 *     tags: [Usuario]	
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *      200:
 *        description: Usuario creado
 */
router.post('', async (req, res) => {
  console.log(`This is a post operation`);

  const usuario = await usuarioService.createUsuario(req.body);

  return res.status(201).json(usuario);
});

export default router;
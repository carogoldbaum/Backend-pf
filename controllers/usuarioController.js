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


 router.post('/registrarse', async (req, res) => {

  const iniciarCuenta = await usuarioService.registrarse(req.body);
  
  return res.status(201).json(iniciarCuenta);
});

router.post('/DatosPersonales', async (req, res) => {

  const usuario = await usuarioService.DatosPersonales(req.body);

  return res.status(201).json(usuario);
});

router.post('/IniciarSesion', async (req, res) => {
  console.log(req.body)
  const LogIn = await usuarioService.IniciarSesion(req.body);
  
  return res.status(200).json(LogIn);
});

router.post('/restablecer', async (req, res) => {
  
  const InfoRestablecer = await usuarioService.Restablecer(req.body);

  return res.status(200).json(InfoRestablecer);
});

router.get('/MailDiferente', async (req, res) => {
  
  const email = await usuarioService.MailDiferente(req.body.email);

  return res.status(200).json(email);

});
  


export default router;
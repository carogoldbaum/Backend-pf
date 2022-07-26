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



router.post('/crear', async (req, res) => {
  console.log(`This is a post operation`);

  const usuario = await usuarioService.createUsuario(req.body);

  return res.status(201).json(usuario);
});

router.post('/registrarse', async (req, res) => {
  console.log(`This is a CArolina post operation`);

  const iniciarCuenta = await usuarioService.registrarseInicial(req.body);
  
  return res.status(201).json(iniciarCuenta);
});

router.post('/login', async (req, res) => {
  console.log(`This is a post operation`);
  
  const LogIn = await usuarioService.IniciarSesion(req.body);

  return res.status(200).json(LogIn);
});

router.post('/restablecer', async (req, res) => {
  console.log(`This is a post operation`);
  
  const InfoRestablecer = await usuarioService.Restablecer(req.body);

  return res.status(200).json(InfoRestablecer);
});

router.post('/MailDiferente', async (req, res) => {
  console.log(`This is a post operation`);
  
  const Mail = await usuarioService.MailDiferente(req.body.Mail);

  if (Mail !=null){
    return res.status(200).json(Mail);
  }else{
    return res.status(404).json("El Mail ya esta en uso");
  }

  
});

export default router;
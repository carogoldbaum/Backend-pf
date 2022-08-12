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
  console.log(`This is a post operation`);

  const iniciarCuenta = await usuarioService.registrarse(req.body);
  
  return res.status(201).json(iniciarCuenta);
});

router.post('/DatosPersonales', async (req, res) => {
  console.log(`This is a post operation`);

  const usuario = await usuarioService.DatosPersonales(req.body);

  return res.status(201).json(usuario);
});

router.post('/IniciarSesion', async (req, res) => {
  console.log(`This is a post operation`);
  
  const LogIn = await usuarioService.IniciarSesion(req.body, res);

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
  router.post('/ValidarContraseña', async (req, res) => {
    console.log(`This is a post operation`);
    
    const Contraseña = await usuarioService.ValidarContraseña(req.body);
  
    return res.status(200).json(Contraseña);
  });
  
});

export default router;
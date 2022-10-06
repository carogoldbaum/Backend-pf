import { Router } from 'express';
import { UsuarioService } from '../services/usuarioService.js';
import { postulantesService } from '../services/postulantesService.js';
import { postulanteRubrosService } from '../services/postulanteRubrosService.js';
import { solicitanteService } from '../services/solicitanteService.js';

const router = Router();
const usuarioService = new UsuarioService();
const PostulantesService = new postulantesService();
const PostulanteRubrosService = new postulanteRubrosService();
const SolicitanteService = new solicitanteService();

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

  if (req.body.idRubro!= null){
    const idUsuario = await usuarioService.UltimoId();

    const postu =  await PostulantesService.InsertarPostulante(idUsuario, req.body.DNI);
    const pr = await PostulanteRubrosService.InsertarRubro(req.body.idRubro, idUsuario);
  }
  else{
    const idUsuario = await usuarioService.UltimoId();
    const soli = await SolicitanteService.InsertarSolicitante(idUsuario);
  }
  
  return res.status(201).json(usuario);
});

router.post('/IniciarSesion', async (req, res) => {

  const LogIn = await usuarioService.IniciarSesion(req.body);
  
  return res.status(200).json(LogIn);
});

router.post('/restablecer', async (req, res) => {
  console.log("sdfjkljsgg", req.body)
  const InfoRestablecer = await usuarioService.Restablecer(req.body);

  return res.status(200).json(InfoRestablecer);
});

router.get('/MailDiferente', async (req, res) => {
  
  const email = await usuarioService.MailDiferente(req.body.email);

  return res.status(200).json(email);
});
  
export default router;
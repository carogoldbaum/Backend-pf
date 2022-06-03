import { Router } from 'express';
import { UsuarioService } from '../services/usuarioService.js';

const router = Router();
const usuarioService = new UsuarioService();

router.get('', async (req, res) => {
  console.log(`This is a get operation`);
  
  const usuario = await usuarioService.getUsuario();

  return res.status(200).json(usuario);
});


router.post('', async (req, res) => {
  console.log(`This is a post operation`);

  const usuario = await usuarioService.createUsuario(req.body);

  return res.status(201).json(usuario);
});

export default router;
import { Router } from 'express';
import { UsuarioService } from '../services/usuarioService.js';

const router = Router();
const usuarioService = new UsuarioService();

router.post('', async (req, res) => {
  console.log(`This is a post operation`);

  const usuario = await usuarioService.createUsuario(req.body);

  return res.status(201).json(usuario);
});

export default router;
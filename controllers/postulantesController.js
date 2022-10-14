import { Router } from 'express';
import { UsuarioService } from '../services/usuarioService.js';
import { postulantesService } from '../services/postulantesService.js';

const router = Router();
const usuarioService = new UsuarioService();
const PostulantesService = new postulantesService();


router.post('/InsertarPostulanteContratado', async (req, res) => {
console.log("dfkngnfdgdfngldfkjngkfdjgkdfjglfjglk", req.body)

  const resultado = await PostulantesService.InsertarPostulanteContratado(req.body);
console.log("resultadooooo", resultado)

  return res.status(200).json(resultado);
});

export default router;

    
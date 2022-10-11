import { Router } from 'express';
import { UsuarioService } from '../services/usuarioService.js';
import { postulanteRubrosService } from '../services/postulanteRubrosService.js';

const router = Router();
const usuarioService = new UsuarioService();
const PostulanteRubrosService = new postulanteRubrosService();

router.get('/BuscarTrabajadores', async (req, res) => {
 
  const IdTrabajador = await PostulanteRubrosService.BuscarTrabajadores(req.body.IdRubro);

  console.log("resultado de busqueda del id usuario", IdTrabajador)

      console.log("id trabajador",IdTrabajador[0].IdUsuario)
      const InfoTrabajador = await usuarioService.BuscarTrabajadoresParte2(IdTrabajador[0].IdUsuario);

      return res.status(200).json(InfoTrabajador);
  
});
  
export default router;
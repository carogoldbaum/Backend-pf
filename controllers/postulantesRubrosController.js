import { Router } from 'express';
import { UsuarioService } from '../services/usuarioService.js';
import { postulanteRubrosService } from '../services/postulanteRubrosService.js';

const router = Router();
const usuarioService = new UsuarioService();
const PostulanteRubrosService = new postulanteRubrosService();

router.get('/BuscarTrabajadores/:id', async (req, res) => {
  console.log("recibo en controller", req.params)
  const IdTrabajador = await PostulanteRubrosService.BuscarTrabajadores(req.params);

  const informacionTrabajadores = await Promise.all(
    IdTrabajador.map(async id => {
    const infoTrabajador = await usuarioService.ObtenerInfoTrabajador(id);
    console.log("Trabajador con id:", id , "Tiene esta informacion: ", infoTrabajador);
    let persona = infoTrabajador[0]
    return persona;
}))
  console.log("respuesta final", informacionTrabajadores)
  return res.status(200).json(informacionTrabajadores);
});

export default router;

    
import { Router } from 'express';
import { UsuarioService } from '../services/usuarioService.js';
import { postulanteRubrosService } from '../services/postulanteRubrosService.js';

const router = Router();
const usuarioService = new UsuarioService();
const PostulanteRubrosService = new postulanteRubrosService();

router.get('/BuscarTrabajadores', async (req, res) => {
  console.log("el id que llega",req.body)
  const IdTrabajador = await PostulanteRubrosService.BuscarTrabajadores(req);

  console.log("resultado de busqueda del id usuario", IdTrabajador)

  let x 
  let InfoTrabajador

  IdTrabajador.forEach(item =>{
     x = item.IdUsuario
    console.log("resultado foreach", x)
    console.log("id trabajador", x)
    InfoTrabajador =  usuarioService.BuscarTrabajadoresParte2(x);

  });

  return res.status(200).json(InfoTrabajador);
     
});
  
export default router;


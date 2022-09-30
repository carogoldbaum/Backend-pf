import conexion from '../db.js'
import 'dotenv/config'
import { response } from 'express';
const postulantesrubrotabla = process.env.DB_TABLA_POSTULANTESRUBRO;

export class postulanteRubrosService {
   
    InsertarRubro = async (id) => { //funciona caro
        
                let query=`INSERT INTO postulantesrubro (idUsuario, IdRubro) VALUES (?,?)`
 
                let values=[id.idUsuario, id.IdRubro]
        
                const [result,fields] = await conexion.execute(query, values);
            }
        
}

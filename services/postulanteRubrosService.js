import conexion from '../db.js'
import 'dotenv/config'
import { response } from 'express';
const postulantesrubrotabla = process.env.DB_TABLA_POSTULANTESRUBRO;

export class postulanteRubrosService {
   
    InsertarRubro = async (IdRubro, idUsuario ) => { //funciona caro
        
                let query=`INSERT INTO postulantesrubro (idUsuario, IdRubro) VALUES (?,?)`
 
                let values=[idUsuario, IdRubro]
        
                const [result,fields] = await conexion.execute(query, values);
            }

            BuscarTrabajadores = async (IdRubro) => { //
                
                let query=`SELECT IdUsuario from postulantesrubro WHERE IdRubro=? `
                
                let values=[IdRubro]
              
                const [result,fields] = await conexion.execute(query, values);
             
                return result;
            }
        
}

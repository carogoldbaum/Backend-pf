import conexion from '../db.js'
import 'dotenv/config'
import { response } from 'express';
const solicitantetabla = process.env.DB_TABLA_SOLICITANTE;

export class solicitanteService {
   
    InsertarSolicitante = async (idUusario ) => { //funciona caro
        
                let query=`INSERT INTO solicitante (idUusario) VALUES (?)`
 
                let values=[idUusario]
        
                const [result,fields] = await conexion.execute(query, values);
            }
        
}

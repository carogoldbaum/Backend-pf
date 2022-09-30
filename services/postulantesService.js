import conexion from '../db.js'
import 'dotenv/config'
import { response } from 'express';
const postulantestabla = process.env.DB_TABLA_POSTULANTES;

export class postulantesService {
   
    InsertarPostulante = async (id) => { //funciona caro
        
                let query=`INSERT INTO postulantes (idUsuario) VALUES (?)`
 
                let values=[id.idUsuario]
        
                const [result,fields] = await conexion.execute(query, values);
            }
        
}
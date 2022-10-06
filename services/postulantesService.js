import conexion from '../db.js'
import 'dotenv/config'
import { response } from 'express';
const postulantestabla = process.env.DB_TABLA_POSTULANTES;

export class postulantesService {
   
    InsertarPostulante = async (idUsuario, DNI) => { //funciona caro
        
                let query=`INSERT INTO postulantes (idUsuario, DNI) VALUES (?,?)`
                console.log("IDDDDDDDDDDDDDDDDDDDDDDDDD", idUsuario, DNI)
                let values=[idUsuario, DNI]
        
                const [result,fields] = await conexion.execute(query, values);
            }
        
}
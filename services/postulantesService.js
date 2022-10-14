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

            InsertarPostulanteContratado = async (info) => { 
        console.log("recibe funcion", info.time, info.date, info.idUsuario )
                let query=`UPDATE postulantes SET HoraContratado = ?, FechaContratado = ? WHERE idUsuario=?`

                let values=[info.time, info.date, info.idUsuario]
        
                const [result,fields] = await conexion.execute(query, values);
                console.log("resultado", result)
                return result;
            }
        
}
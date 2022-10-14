import sql from 'mssql'
import conexion from '../db.js'
import 'dotenv/config'

const rubroTabla = process.env.DB_TABLA_RUBRO;

export class RubroService {
        getRubro = async () => { //funciona
        
            let query=`SELECT * from rubros`
            const [result,fields] = await conexion.execute(query);
            
            return result;
        }    
}

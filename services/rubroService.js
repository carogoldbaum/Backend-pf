import sql from 'mssql'
import 'dotenv/config'
import connectionRequest from '../db.js'
const rubroTabla = process.env.DB_TABLA_RUBRO;

export class RubroService {
     getRubro = async () => { //funciona
            console.log('Get All rubros in rubros Service');
            let query=`SELECT * from rubros`
            const [result,fields] = await conexion.execute(query);
            console.log(result);
            return result;
        }    
}

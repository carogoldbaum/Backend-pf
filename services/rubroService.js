import sql from 'mssql'
import config from '../db.js'
import 'dotenv/config'

const rubroTabla = process.env.DB_TABLA_RUBROS;

export class RubroService {
        getRubro = async () => {
            console.log('This is a function on the service');
            const pool = await sql.connect(config);
            const response = await pool.request()
                .query(`select Nombre from ${rubroTabla}`);
        
            console.log(response)
            return response.recordset;
        }    
}
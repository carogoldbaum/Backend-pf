import sql from 'mssql'
import config from '../db.js'
import 'dotenv/config'

const rubroTabla = process.env.DB_TABLA_RUBRO;

export class RubroService {
        getRubro = async () => {
            console.log('This is a function on the service');
            const pool = await sql.connect(config);
            const response = await pool.request()
                .query(`select * from "${rubroTabla}"`);
            console.log(response)
            return response.recordset;
        }    
}
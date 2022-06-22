import sql from 'mssql'
import config from '../db.js'
import 'dotenv/config'

const rubroTabla = process.env.DB_TABLA_RUBROS;

export class RubroService {
        getRubro = async (rubro) => {
            console.log('This is a function on the service');
            let query=`select * from ${rubroTabla}`;
            /*
            if (rubro){
                query+=" where rubro=@Rubro";
            }*/ 
            const pool = await sql.connect(config);
            const response = await pool.request()
            //.input('Rubro', sql.VarChar, rubro)
            .query(query);
        
            console.log(response)
            return response.recordset;
        }    
}
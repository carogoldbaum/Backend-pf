import sql from 'mssql'
import config from '../db.js'
import 'dotenv/config'
import conexion from '../index.js'

const rubroTabla = process.env.DB_TABLA_RUBRO;

export class RubroService {
        getRubro = async () => {
            conexion.query('select * from rubros', function (error, results){
                if(error)
                throw error;
                results.forEach(result => {
                    console.log(result)
                });
            })
            
            conexion.end();
        }    
}
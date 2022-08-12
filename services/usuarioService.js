import conexion from '../index.js'
import config from '../db.js'
import 'dotenv/config'
import { response } from 'express';

const usuarioTabla = process.env.DB_TABLA_USUARIO;

export class UsuarioService {

    DatosPersonales = async (usuario) => {
        conexion.query('UPDATE usuario SET DNI=?, NombreApellido=?, Celular=?, FechaNacimiento=? WHERE Mail=? AND PassWord=?',[usuario.DNI,usuario.NombreApellido,usuario.Celular,usuario.FechaNacimiento,usuario.Mail,usuario.PassWord], function(error,results,fields){
            if(error)
            throw error;
   
        })
        
        conexion.end();
    };

    /*registrarse = async (iniciarCuenta) => {
        let existe = true; // await this.MailDiferente(iniciarCuenta.Mail);

        if  (existe){

            console.log(iniciarCuenta)

            conexion.query('INSERT INTO usuario(Mail, Password) VALUES (?, ?, ?)', [iniciarCuenta?.Mail, iniciarCuenta?.Password], function (error, results, fields){
                if(error){
                console.log(error)
                }
                let Ultimo = await this.UltimoId();
                return Ultimo;
                });
            }
        }*/
    

/*            const pool = await sql.connect(config);
            const response = await pool.request()
                .input('Password',sql.VarChar, iniciarCuenta?.Password ?? '')
                .input('Mail',sql.VarChar, iniciarCuenta?.Mail ?? '')
                .query(`INSERT INTO "${usuarioTabla}"(Mail, Password) VALUES (@Mail, @Password)`);
                let Ultimo = await this.UltimoId();
                 console.log(results.insertId);
                return Ultimo;
        }else{
            return null;
        }
        
    }*/

   /* IniciarSesion = async (LogIn) => {
            console.log('This is a function on the service');
            
            const pool = await sql.connect(config);
            const response = await pool.request()
            .input('Password',sql.VarChar, LogIn?.Password ?? '')
            .input('Mail',sql.VarChar, LogIn?.Mail ?? '')
            .query(`select * from "${usuarioTabla}" WHERE Password=@Password AND Mail=@Mail`);
            console.log(response)

            return response.recordset;
        }    
*/
/*IniciarSesion = async (LogIn, res) => {
    console.log('This is a function on the service');
    
    conexion.query('select * from usuario where Password=? AND Mail=?', [LogIn?.Password, LogIn?.Mail], function (error, results, fields){
        if(error)
        throw error;
        results.forEach(result => {
            console.log(result);
        });

    })

}*/

       /* Restablecer = async (InfoRestablecer) => {
            console.log('This is a function on the service');

            const pool = await sql.connect(config);
            const response = await pool.request()
            .input('Password',sql.VarChar, InfoRestablecer?.Password ?? '')
            .input('Mail',sql.VarChar, InfoRestablecer?.Mail ?? '')
            .query(`UPDATE "${usuarioTabla}" SET Password=@Password WHERE Mail=@Mail`);
            console.log(response)

            return response.recordset;
        }    */

       /* MailDiferente = async (MailIngresado) => {
            let respuesta = false;

            console.log('This is a function on the service');
         
            /*conexion.query('select * from usuario where AND Mail=?', [MailIngresado?.Mail], function (error, results, fields){
                if(error)
                throw error;
                results.forEach(result => {
                    console.log(result);
                });
        
            })   */  
           
            /*.input('Mail',sql.VarChar, MailIngresado?.Mail ?? '')
            .query(`select * from "${usuarioTabla}" WHERE Mail=@Mail`);
 
           /* if(response.recordset.length != 0){
                respuesta = true;
            }

            return respuesta;
        
        }   */ 
        /*UltimoId = async () => {
            let respuesta = 0;
            console.log('This is a function on the service');
            const pool = await sql.connect(config);
            const response = await pool.request()
            conexion.query(`select Max(IdUsuario) as Ultimo from "${usuarioTabla}"`);

            if(response.recordset.length != 0){
                respuesta = response.recordset[0];
            }

            return respuesta;
        
        }    */
}
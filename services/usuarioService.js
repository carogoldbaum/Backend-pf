import conexion from '../index.js'
import config from '../db.js'
import 'dotenv/config'

const usuarioTabla = process.env.DB_TABLA_USUARIO;

export class UsuarioService {

    createUsuario = async (usuario) => {
        conexion.query('UPDATE usuario SET DNI=?, foto=?, NombreApellido=?, Celular=?, FechaNacimiento=?, Opinion=? WHERE Mail=? AND PassWord=?',[usuario.DNI,usuario.foto,usuario.NombreApellido,usuario.Celular,usuario.FechaNacimiento,usuario.opinion,usuario.Mail,usuario.PassWord], function(error,results){
            if(error)
            throw error;
            results.forEach(result => {
                console.log(result)
            });
        })
        
        conexion.end();
    };

    registrarseInicial = async (iniciarCuenta) => {
        let existe = await this.MailDiferente(iniciarCuenta.Mail);

        if  (existe){
            const pool = await sql.connect(config);
            const response = await pool.request()
                .input('Password',sql.VarChar, iniciarCuenta?.Password ?? '')
                .input('Mail',sql.VarChar, iniciarCuenta?.Mail ?? '')
                .query(`INSERT INTO "${usuarioTabla}"(Mail, Password) VALUES (@Mail, @Password)`);
                return response.recordset;
        }else{
            return null;
        }
        
    }

    IniciarSesion = async (LogIn) => {
            console.log('This is a function on the service');
            
            const pool = await sql.connect(config);
            const response = await pool.request()
            .input('Password',sql.VarChar, LogIn?.Password ?? '')
            .input('Mail',sql.VarChar, LogIn?.Mail ?? '')
            .query(`select * from "${usuarioTabla}" WHERE Password=@Password AND Mail=@Mail`);
            console.log(response)

            return response.recordset;
        }    

        Restablecer = async (InfoRestablecer) => {
            console.log('This is a function on the service');

            const pool = await sql.connect(config);
            const response = await pool.request()
            .input('Password',sql.VarChar, InfoRestablecer?.Password ?? '')
            .input('Mail',sql.VarChar, InfoRestablecer?.Mail ?? '')
            .query(`UPDATE "${usuarioTabla}" SET Password=@Password WHERE Mail=@Mail`);
            console.log(response)

            return response.recordset;
        }    

        MailDiferente = async (MailIngresado) => {
            let respuesta = false;
            console.log('This is a function on the service');
            const pool = await sql.connect(config);
            const response = await pool.request()
            .input('Mail',sql.VarChar, MailIngresado?.Mail ?? '')
            .query(`select * from "${usuarioTabla}" WHERE Mail=@Mail`);

            if(response.recordset.length != 0){
                respuesta = true;
            }

            return respuesta;
        
        }    
}
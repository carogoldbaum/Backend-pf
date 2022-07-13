import sql from 'mssql'
import config from '../db.js'
import 'dotenv/config'

const usuarioTabla = process.env.DB_TABLA_USUARIO;

export class UsuarioService {

    createUsuario = async (usuario) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('DNI',sql.Int, usuario?.DNI ?? '')
            .input('foto',sql.VarChar, usuario?.foto ?? '')
            .input('NombreApellido',sql.VarChar, usuario?.NombreApellido ?? '')
            .input('Celular',sql.Int, usuario?.Celular ?? 0)
            .input('Mail',sql.VarChar, usuario?.Mail ?? '')
            .input('Password',sql.VarChar, usuario?.Password ?? '')
            .input('FechaNacimiento',sql.Date, usuario?.FechaNacimiento ?? '2022-12-30')
            .input('Opinion',sql.VarChar, usuario?.Opinion ?? '')
            .query(`UPDATE ${usuarioTabla} SET DNI=@DNI, foto=@foto, NombreApellido=@NombreApellido, Celular=@Celular, FechaNacimiento=@FechaNacimiento, Opinion=@Opinion WHERE Mail=@Mail AND Password=@Password`);
        console.log(response)

        return response.recordset;
    }

    registrarseInicial = async (iniciarCuenta) => {
        console.log('This is a function on the service');
        console.log(iniciarCuenta);

        /*
        Verifico si existe x email!
        Si SI existe... return 
        Si no existe.. hago el insert
        */
        let existe = await this.MailDiferente(iniciarCuenta.Mail);
        console.log(existe)
        if  (existe){
            const pool = await sql.connect(config);
            const response = await pool.request()
                .input('Password',sql.VarChar, iniciarCuenta?.Password ?? '')
                .input('Mail',sql.VarChar, iniciarCuenta?.Mail ?? '')
                .query(`INSERT INTO ${usuarioTabla}(Mail, Password) VALUES (@Mail, @Password)`);
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
            .query(`select * from ${usuarioTabla} WHERE Password=@Password AND Mail=@Mail`);
            console.log(response)

            return response.recordset;
        }    

        Restablecer = async (InfoRestablecer) => {
            console.log('This is a function on the service');

            const pool = await sql.connect(config);
            const response = await pool.request()
            .input('Password',sql.VarChar, InfoRestablecer?.Password ?? '')
            .input('Mail',sql.VarChar, InfoRestablecer?.Mail ?? '')
            .query(`UPDATE ${usuarioTabla} SET Password=@Password WHERE Mail=@Mail`);
            console.log(response)

            return response.recordset;
        }    

        MailDiferente = async (MailIngresado) => {
            let respuesta = false;
            console.log('This is a function on the service');
            const pool = await sql.connect(config);
            const response = await pool.request()
            .input('Mail',sql.VarChar, MailIngresado?.Mail ?? '')
            .query(`select * from ${usuarioTabla} WHERE Mail=@Mail`);

            if(response.recordset.length != 0){
                respuesta = true;
            }

            return respuesta;
        
        }    
}
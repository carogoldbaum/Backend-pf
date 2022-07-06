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
            .query(`UPDATE ${usuarioTabla} SET DNI=@DNI, foto=@foto, NombreApellido=@NombreApellido, Celular=@Celular, Mail=@Mail, Password=@Password, FechaNacimiento=@FechaNacimiento, Opinion=@Opinion`);
        console.log(response)

        return response.recordset;
    }

    registrarseInicial = async (iniciarCuenta) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('Password',sql.VarChar, iniciarCuenta?.Password ?? '')
            .input('Mail',sql.VarChar, iniciarCuenta?.Mail ?? '')
            .query(`INSERT INTO ${usuarioTabla}(Mail, Password) VALUES (@Mail, @Password)`);
        console.log(response)

        return response.recordset;
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

}
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
            .query(`INSERT INTO ${usuarioTabla}(DNI, foto, NombreApellido, Celular, Mail, Password, FechaNacimiento, Opinion) VALUES (@DNI, @foto, @NombreApellido, @Celular, @Mail, @Password, @FechaNacimiento, @Opinion)`);
        console.log(response)

        return response.recordset;
    }
}
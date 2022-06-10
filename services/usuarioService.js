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
            .input('foto',sql.NChar, usuario?.foto ?? '')
            .input('NombreApellido',sql.NChar, usuario?.NombreApellido ?? '')
            .input('Celular',sql.Int, usuario?.Celular ?? 0)
            .input('Mail',sql.NChar, usuario?.Mail ?? '')
            .input('Password',sql.NChar, usuario?.Password ?? '')
            .input('FechaNacimiento',sql.Int, usuario?.FechaNacimiento ?? 0)
            .input('Opinion',sql.NChar, usuario?.Opinion ?? '')
            .query(`INSERT INTO ${usuarioTabla}(DNI, foto, NombreApellido, Celular, Mail, Password, FechaNacimiento, Opinion) VALUES (@DNI, @foto, @NombreApellido, @Celular, @Mail, @Password, @FechaNacimiento, @Opinion)`);
        console.log(response)

        return response.recordset;
    }
}
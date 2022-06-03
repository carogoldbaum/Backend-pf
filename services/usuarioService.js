import sql from 'mssql'
import config from '../db.js'
import 'dotenv/config'

const usuarioTabla = process.env.DB_TABLA_USUARIO;

export class UsuarioService {

    getUsuario = async () => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        const response = await pool.request()
            .query(`select NombreApellido from ${usuarioTabla}`);
    
        console.log(response)
        return response.recordset;
    }


    /*
    createPelicula = async (pelicula) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('Id',sql.Int, pelicula?.id ?? 0)    
            .input('Imagen',sql.NChar, pelicula?.imagen ?? '')
            .input('Titulo',sql.NChar, pelicula?.titulo ?? '')
            .input('FechaCreacion',sql.Date, pelicula?.fechaCreacion ?? 0)
            .input('Calificacion',sql.Int, pelicula?.calificacion ?? 0)
            .query(`INSERT INTO ${peliculaTabla}(Id, Imagen, Titulo, FechaCreacion, Calificacion) VALUES (@Id, @Imagen, @Titulo, @FechaCreacion, @Calificacion)`);
        console.log(response)

        return response.recordset;
    }*/

    createUsuario = async (usuario) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('DNI',sql.NChar, usuario?.DNI ?? '')
            .input('foto',sql.Int, usuario?.foto ?? 0)
            .input('NombreApellido',sql.NChar, usuario?.NombreApellido ?? '')
            .input('Celular',sql.NChar, usuario?.Celular ?? '')
            .input('Mail',sql.Int, usuario?.Mail ?? 0)
            .input('Password',sql.Int, usuario?.Password ?? 0)
            .input('FechaNacimiento',sql.Int, usuario?.FechaNacimiento ?? 0)
            .input('Opinion',sql.Int, usuario?.Opinion ?? 0)
            .query(`INSERT INTO ${Usuario}(DNI, foto, NombreApellido, Celular, Mail, Password, FechaNacimiento, Opinion) VALUES (@DNI, @foto, @NombreApellido, @Celular, @Mail, @Password, @FechaNacimiento, @Opinion)`);
        console.log(response)

        return response.recordset;
    }
}
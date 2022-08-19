import conexion from '../db.js'
import 'dotenv/config'
import { response } from 'express';

const usuarioTabla = process.env.DB_TABLA_USUARIO;

export class UsuarioService {

    DatosPersonales = async (usuario) => {  
      
        const Id = await this.UltimoId();

        let query=`UPDATE usuario set DNI = ?, NombreApellido= ?, Celular= ?, FechaNacimiento= ? WHERE IdUsuario= ?`
 
        let values=[usuario.DNI, usuario.NombreApellido, usuario.Celular, usuario.FechaNacimiento, Id]

        const [result,fields] = await conexion.execute(query, values);
        console.log(result.affectedRows)
        return result;
    }

    registrarse = async (iniciarCuenta) => { //funciona
        const mailExiste = await this.MailDiferente(iniciarCuenta.Mail);
        
        if  (mailExiste == false){
                let query=`INSERT INTO usuario (Mail, Password) VALUES (?, ?)`
 
                let values=[iniciarCuenta.Mail, iniciarCuenta.Password]
        
                const [result,fields] = await conexion.execute(query, values);

            }
            else{
                return "Mail ya existe";
        }
        }

        IniciarSesion = async (LogIn, res) => {
            let query=`SELECT * from usuario where Password=? AND Mail=?`
 
            let values=[LogIn.Password, LogIn.Mail]

            const [result,fields] = await conexion.execute(query, values);
            console.log(result.affectedRows)
            return result;
        }

        Restablecer = async (InfoRestablecer) => {
            let query=`UPDATE usuario SET Password = ? WHERE Mail= ?`
 
            let values=[InfoRestablecer.Password, InfoRestablecer.Mail]
    
            const [result,fields] = await conexion.execute(query, values);
            console.log(result.affectedRows)
            return result;
        }    

        MailDiferente = async (MailIngresado) => { //funciona
            let MailExiste = false;
            
            let query=`SELECT * from usuario WHERE Mail= ?`
            let values=[MailIngresado]
            const [result,fields] = await conexion.execute(query, values);
           
           if(result.length != 0){
                MailExiste = true;
            }

            return MailExiste;
        }

        UltimoId = async () => { //funciona
        
            let query=`SELECT Max(IdUsuario) as Ultimo from usuario`
            const [result,fields] = await conexion.execute(query);
            console.log(result)
            return result;
        }    
}
import conexion from '../db.js'
import 'dotenv/config'
import { response } from 'express';

const usuarioTabla = process.env.DB_TABLA_USUARIO;

export class UsuarioService {

    DatosPersonales = async (usuario) => {  //funciona
      
        const Id = await this.UltimoId();

        let query=`UPDATE usuario set DNI = ?, NombreApellido= ?, Celular= ?, FechaNacimiento= ? WHERE IdUsuario= ?`
 
        let values=[usuario.data.DNI, usuario.data.NombreApellido, usuario.data.Celular, usuario.data.FechaNacimiento, Id]

        const [result,fields] = await conexion.execute(query, values);
        return result;
    }

    registrarse = async (iniciarCuenta) => { //funciona
   
        const mailExiste = await this.MailDiferente(iniciarCuenta.email);
        
        if  (mailExiste == false){
                let query=`INSERT INTO usuario (email, password) VALUES (?, ?)`
 
                let values=[iniciarCuenta.email, iniciarCuenta.password]
        
                const [result,fields] = await conexion.execute(query, values);
            }
            else{
                return "Mail ya existe";
        }
        }

        IniciarSesion = async (LogIn) => { //funciona 2
            let validar = false
            console.log("algooooooooooooo")
            let query=`SELECT * from usuario where password=? AND email=?`
 
            let values=[LogIn.data.password, LogIn.data.email]

            const [result,fields] = await conexion.execute(query, values);

            if(result.length != 0){
                validar = true;
            }

            return validar;
        }

        Restablecer = async (InfoRestablecer) => { //funciona
            let query=`UPDATE usuario SET Password = ? WHERE Mail= ?`
 
            let values=[InfoRestablecer.data.password, InfoRestablecer.data.email]
    
            const [result,fields] = await conexion.execute(query, values);
          
            return result;
        }    

        MailDiferente = async (MailIngresado) => { //funciona
    
            let MailExiste = false;
            
            let query=`SELECT * from usuario WHERE email= ?`
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
            return result;
        }    
}
import 'dotenv/config'
import connectionRequest from '../db.js'
const usuarioTabla = process.env.DB_TABLA_USUARIO;

export class UsuarioService {

    DatosPersonales = async (usuario) => {  //funciona caro
      
        let Id = await this.UltimoId();
        let query=`UPDATE usuario set DNI = ?, NombreApellido= ?, Celular= ?, FechaNacimiento= ? WHERE IdUsuario= ?`
        let values=[usuario.DNI, usuario.NombreApellido, usuario.Celular, usuario.FechaNacimiento, Id]
        const conexion = await connectionRequest();
        const [result,fields] = await conexion.execute(query, values);
        conexion.destroy();
        return result;
    }

    registrarse = async (iniciarCuenta) => { //funciona caro
   
        const mailExiste = await this.MailDiferente(iniciarCuenta.email);
        const conexion = await connectionRequest();

        if  (mailExiste == false){
                let query=`INSERT INTO usuario (email, password) VALUES (?, ?)`
 
                let values=[iniciarCuenta.email, iniciarCuenta.password]
                const [result,fields] = await conexion.execute(query, values);
                conexion.destroy();
            }
            else{
                conexion.destroy();
                return "Mail ya existe";
        }
        }

        IniciarSesion = async (LogIn) => { //funciona caro
            let validar = false
            const conexion = await connectionRequest();
            let query=`SELECT * from usuario where password=? AND email=?`
 
            let values=[LogIn.password, LogIn.email]

            const [result,fields] = await conexion.execute(query, values);
            conexion.destroy();

            if(result.length != 0){
                validar = true;
            }

            return validar;
        }

        Restablecer = async (InfoRestablecer) => { //funcionan caro
            let query=`UPDATE usuario SET Password = ? WHERE email= ?`
 
            let values=[InfoRestablecer.password, InfoRestablecer.email]
            const conexion = await connectionRequest();
            const [result,fields] = await conexion.execute(query, values);
            conexion.destroy();

            return result;
        }    

        MailDiferente = async (MailIngresado) => { //funciona caro
    
            let MailExiste = false;
            
            let query=`SELECT * from usuario WHERE email= ?`
            let values=[MailIngresado]
            const conexion = await connectionRequest();
            const [result,fields] = await conexion.execute(query, values);
            conexion.destroy();

            if(result.length != 0){
                MailExiste = true;
            }

            return MailExiste;
        }

        UltimoId = async () => { //funciona caro
        
            let query=`SELECT MAX(IdUsuario) as ultimoId from usuario`
            const conexion = await connectionRequest();
            const [result,fields] = await conexion.execute(query);
            conexion.destroy();

            return result[0].ultimoId;
        }    
}
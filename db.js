import 'dotenv/config'
import mysql from 'mysql2/promise'


export default async function connectionRequest() {
    var conexion = await mysql.createConnection({
        host: process.env.HOST,
        database: process.env.DATABASE,
        user: process.env.USER,
        password: process.env.PASSWORD,
    });


    conexion.connect(function (err) {
        if (err) throw err;
        console.log("Database Connected!");
    });
    return conexion;
}


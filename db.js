import 'dotenv/config'

const config = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  server: process.env.HOST,
  database: process.env.DATABASE,
  options: { 
    trustServerCertificate: true,
  } 
}
export default config;
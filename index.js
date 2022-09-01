import express from "express";
import cors from "cors";
import jwtStrategy from './common/jwt.strategy.js';
import passport from 'passport';
import TokenRouter from './controllers/TokenController.js';
import usuarioRouter from "./controllers/usuarioController.js";
import rubroRouter from "./controllers/rubroController.js";
import path from "path";

import mysql from 'mysql';

//swagger
import swaggerUI from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";


const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ConApp API",
      version: "1.0.0"
    },
    severs: [
      {
        url: "http://localhost:5000"
      }
    ]
  },
  apis: [`${path.join("localhost:5000", "../controllers/*.js")}`]
}

const app = express();
const specs = swaggerJsdoc (swaggerSpec);

app.use(cors());
app.use(express.json());
passport.use(jwtStrategy);
app.use(passport.initialize());

app.use("/usuario", usuarioRouter);
app.use("/rubro", rubroRouter);
app.use("/auth", TokenRouter);
//app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(specs));


const { PORT=3000, LOCAL_ADDRESS='0.0.0.0' } = process.env
server.listen(PORT, LOCAL_ADDRESS, () => {
  const address = server.address();
  console.log('server listening at', address);
});


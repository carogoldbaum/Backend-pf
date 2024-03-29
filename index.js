import express from "express";
import cors from "cors";
import jwtStrategy from './common/jwt.strategy.js';
import passport from 'passport';
import TokenRouter from './controllers/TokenController.js';
import postulantesRubrosRouter from "./controllers/postulantesRubrosController.js";
import usuarioRouter from "./controllers/usuarioController.js";
import rubroRouter from "./controllers/rubroController.js";
import postulantesRouter from "./controllers/postulantesController.js";

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
const PORT = 3000;
const specs = swaggerJsdoc (swaggerSpec);
app.use(cors());
app.use(express.json());
passport.use(jwtStrategy);
app.use(passport.initialize());
app.use(express.urlencoded({ extended: false }));

app.use("/usuario", usuarioRouter);
app.use("/rubro", rubroRouter);
app.use("/auth", TokenRouter);
app.use("/postulantesRubros", postulantesRubrosRouter);
app.use("/postulantes", postulantesRouter);

//app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(specs));
app.listen(process.env.PORT || PORT, () => {
  console.log(`Live at ${process.env.PORT || PORT}`);
})

import express from "express";
import cors from "cors";
import jwtStrategy from '../Backend-pf/common/jwt.strategy.js';
import passport from 'passport';
import TokenRouter from '../Backend-pf/controllers/TokenController.js';
import usuarioRouter from "../Backend-pf/controllers/usuarioController.js";
import rubroRouter from "../Backend-pf/controllers/rubroController.js";

const path = require('path');

//swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ConApp API",
      version: "1.0.0"
    },
    severs: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: [`${path.join(__dirname, "../controllers/*.js")}`]
}

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
passport.use(jwtStrategy);
app.use(passport.initialize());

app.use("/usuario", usuarioRouter);
app.use("/rubro", rubroRouter);
app.use("/auth", TokenRouter);
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
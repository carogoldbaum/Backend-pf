import express from "express";
import cors from "cors";
import jwtStrategy from '../Backend-pf/common/jwt.strategy.js';
import passport from 'passport';
import TokenRouter from '../Backend-pf/controllers/TokenController.js';
import usuarioRouter from "../Backend-pf/controllers/usuarioController.js";
import rubroRouter from "../Backend-pf/controllers/rubroController.js";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
passport.use(jwtStrategy);
app.use(passport.initialize());

app.use("/usuario", usuarioRouter);
app.use("/rubro", rubroRouter);
app.use("/auth", TokenRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
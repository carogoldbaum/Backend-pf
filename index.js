import express from "express";
import cors from "cors";
import passport from 'passport';
import RwgistrarseRouter from "./src/controllers/registrarseController.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use("/auth", AuthRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
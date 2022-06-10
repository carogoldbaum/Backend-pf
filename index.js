import express from "express";
import cors from "cors";
import usuarioRouter from "../Backend-pf/controllers/usuarioController.js";
import rubroRouter from "../Backend-pf/controllers/rubroController.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/usuario", usuarioRouter);
app.use("/rubro", rubroRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
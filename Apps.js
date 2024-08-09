import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { becario } from "./backend/controllers/Becarios.controller.js";
import { empleados } from "./backend/controllers/empleados.controller.js";
import { Entrenadores } from "./backend/controllers/Entrenadores.controller.js";
import { test } from "./backend/controllers/Lideres.controller.js";
import { MP } from "./backend/controllers/materiaPrima.controller.js";
import { nomina } from "./backend/controllers/Nomina.controllers.js";
import { tecnico } from "./backend/controllers/Tecnicos.controller.js";

dotenv.config();

mongoose.connect(process.env.url)

    .then(() => {
        console.log("La conexion con la base de datos funcion")
    })
    .catch(() => {
        console.log("No funciono la conexion, verifica tu codigo")
    })

const app = express();
app.use(cors())

app.listen(4000, () => {
    console.log("Mi servidor esta funcionando")
})

becario()
empleados()
Entrenadores()
test()
MP()
nomina()
tecnico()
import { Schema, model } from "mongoose";

export const Nomina = new Schema({

    sueldo: { type: String },

    nombrEmpleado: { type: String }

})

export const Nominas = new model('Nominas de Empleados', Nomina)

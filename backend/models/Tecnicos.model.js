import { Schema, model } from "mongoose";

export const B = new Schema({

    nombre: { type: String },

    apellido: { type: String },

    edad: { type: Number },

    sueldo: { type: Number },

    Posicion: { type: String }
})


export const modelo1 = new model('Tecnicos', B)

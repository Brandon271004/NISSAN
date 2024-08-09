import { Schema, model } from "mongoose";

export const lider = new Schema({

    nombre: { type: String },

    apellido: { type: String },

    edad: { type: Number },

    sueldo: { type: Number },

    Rol: { type: String },
    
    Horas: { type: Number }
})

export const lideres = new model('Lideres en Nissan', lider)

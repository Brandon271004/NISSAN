import { Schema, model } from "mongoose";

export const Materiales = new Schema({

    Precio: { type: Number },

    Calidad: { type: String }

})

export const MateriaP = new model('Materiales a Usar', Materiales)

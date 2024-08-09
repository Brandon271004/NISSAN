import { Schema, model } from "mongoose";

export const A = new Schema({
    
    nombre:{ type:String},
    
    apellido:{type:String},
    
    edad:{ type: Number},

    sueldo:{type: Number }
})


export const empleados = new model('Empleado', A)

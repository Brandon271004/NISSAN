import {empleados} from '../models/Empleados.model.js'

export const empleados = () => {
    console.log("llamando la funcion desde el servidor")
}

empleados.create({
    nombre:"Brandon",
    apellidoP:"Martinez",
    edad:32,
    sueldo:20000
})

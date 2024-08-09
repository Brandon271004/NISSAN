import {becarios} from '../models/Becarios.model.js'

export const becario = () => {
    console.log("llamando la funcion desde el servidor")
}

becarios.create({
    nombre:"Julio",
    apellidoP:"Hernandez",
    edad:18,
    sueldo:1200
})

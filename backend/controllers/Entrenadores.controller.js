import {entrenadores} from '../models/Tecnicos.model.js'

export const Entrenadores = () => {
    console.log("llamando la funcion desde el servidor")
}

entrenadores.create({
    nombre:"Julio",
    apellidoP:"Martinez",
    edad:23,
    Sueldo:3000,
    Posicion:"Rango Medio"
})

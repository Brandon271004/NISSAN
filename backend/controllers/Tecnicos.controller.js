import {modelo1} from '../models/Tecnicos.model.js'

export const tecnico = () => {
    console.log("llamando la funcion desde el servidor")
}

modelo1.create({
    nombre:"Brandon",
    apellidoP:"Martinez",
    edad:32,
    Sueldo:20000,
    Posicion:"Rango Alto"
})

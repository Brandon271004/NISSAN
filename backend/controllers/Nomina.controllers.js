import {Nominas} from '../models/Nomina.models.js'

export const nomina = () => {
    console.log("llamando la funcion desde el servidor")
}

Nominas.create({
    nombreEmpleado:"Brandon",
    Sueldo:20000,
   
})

import { modeloEmpleados } from "../models/Lideres.model.js";

const test = () => {
    console.log("La Conexión ha sido exitosa en empleado.controller")
}
export default test

modeloEmpleados.create({

    nombre: "Julio",

    apellido: "Dias",
     
    edad: 19,
    sueldo:3000

    
})

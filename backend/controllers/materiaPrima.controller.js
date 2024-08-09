import {MateriaP} from '../models/materiaPrima.model.js'

export const MP = () => {
    console.log("llamando la funcion desde el servidor")
}

MateriaP.create({
 precio: 4450,
 calidad:"Excelente"
})

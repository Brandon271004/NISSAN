import {Materia} from '../models/materiaSecundaria.model.js'

export const MP = () => {
    console.log("llamando la funcion desde el servidor")
}

Materia.create({
 precio: 5000,
 calidad:"Excelente"
})

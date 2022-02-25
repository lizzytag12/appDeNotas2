const fs = require("fs")
const tareas = require ("./tareas.json")
const colors = require('colors')   // se requiere agregar esta dependencia.


const mostrarTareas = (tareas) => {
    tareas.forEach((tarea,index) => {
        console.log(`${index + 1} - Nombre de la Tarea:  ${tarea.titulo.yellow} - Estado en el que se encuentra la Tarea: ${tarea.estado.cyan} `);
    });
}



const guardarJSON = (tareas) => {
    fs.writeFileSync('./tareas.json',JSON.stringify(tareas,null,3));
    return null
}

const filtrado = (estado,tareas) => {

     const result = tareas.filter(tarea => tarea.estado === estado); /**declaro una variable que guarde las tareas con el estado que le solicite */ 

    result.forEach((tarea,index)=>{
        console.log(`${index + 1} - Nombre de la Tarea:  ${tarea.titulo.yellow} - Estado en el que se encuentra la Tarea: ${tarea.estado.cyan} `) /**  recorro lo guardado en la variable anterior y la recorro con un forEach generar un array de formato legible  */

    })            
}
 

module.exports={

    listarTareas : () => {
        mostrarTareas(tareas)       //Muestra tareas
        return null
    },

    escribirJSON : (tarea) => {

        tareas.push(tarea)                         //Para guardar en el Json
        guardarJSON(tareas)
       return `Felicidades!! su tarea de titulo : \n- ${tarea.titulo.cyan}  \n de estado : \n - ${tarea.estado.cyan} ha sido creada exitosamente!`  // muestro al usuario
        
    },

    guardarTarea : (tarea)=>{
        tareas.push(tarea);         // Para cargar nueva tarea
        escribirJSON(tareas)
    },

    leerPorEstado : (estado)=> {  //Para filtrar por estado
        filtrado(estado,tareas)
    }
}




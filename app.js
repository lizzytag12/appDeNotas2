const process = require("process")
const fs = require('fs');
const tareas = require('./tareas.json');
const {listarTareas, escribirJSON, leerPorEstado} = require("./funcionesDeTareas")
const colors = require('colors')


const accion = process.argv[2];

let titulo = process.argv[3]; //Agrego el titulo por consola
               
                
let estado = process.argv[4] //Agrego el estado por consola 
               




    
switch (accion) {
    
    case "listar".toLowerCase():

    listarTareas();     //Muestra tareas
        break;

    case "agregar".toLowerCase():

    
         if (titulo === undefined) {

                  console.log(" ATENCIÓN!! \n- NO OLVIDES ingresar un TITULO para tu nueva tarea".brightRed);   // validacion de titulo  UNDEFINED
                   return;
         }
         if (estado === undefined) {
                   
            console.log(" ATENCIÓN!! \n- NO OLVIDES ingresar un ESTADO para tu nueva tarea".brightRed);   //validacion de estado undefined
            return;
           }
              
               let nuevaTarea = {
                    titulo,
                    estado
                }

                let result = escribirJSON(nuevaTarea)
                
                 console.log(result)
                break;
            
    case "filtrar".toLowerCase():
                   let estadoNuevo = process.argv[3];  //Agrego estado por consola usando posicion 3
                   
                    leerPorEstado(estadoNuevo) 
                   
                    break;


   case undefined :
   
                   console.log("ATENCION!... DEBES PASAR UNA ACCION".brightRed);        //Muestra error
                
                 break;

    default:

    console.log("LO SIENTO, NO ENTIENDO QUE QUIERES HACER".brightRed);   //Por defecto
        
                 break;
}

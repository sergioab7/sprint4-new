import { Request, Response } from "express";
import { tareas } from "../db/tareas";
import { IAgregarTarea } from "../interfaces/IAgregarTarea";
import { v4 as uuidv4} from "uuid";

let misTask = [...tareas];

export const agregarTarea = (req:Request,res:Response) => {

    try {
        const { nombreTarea }= req.body;
    
        const tareaAgregada:IAgregarTarea = {
            id:uuidv4(),
            nombre:nombreTarea,
            completado:false
        }
    
        misTask.push(tareaAgregada);
    
        res.status(201).json({
            msg:'[+] Tarea agregada con éxito',
            misTask
        })
    } catch (error) {
        return res.status(500).json({
            msg:'[-] Internal Server Error.',
            error
        })
    }
}

export const mostrarTareas = (req:Request,res:Response) => {

    try {
        const t = misTask;
    
        return res.status(200).json({
            msg:'[+] Viendo tareas totales',
            tareas_totales:t
        })
    } catch (error) {
        return res.status(500).json({
            msg:'[-] Internal Server Error.',
            error
        })
    }
}

export const mostrarTarea = (req:Request,res:Response) => {

    try {
        const {id} = req.params;
    
        const existeTarea = misTask.findIndex(task => task.id == id);
    
        if(existeTarea == -1){
            return res.status(401).json({
                msg:'[-] Tarea no encontrada'
            })
        }else{
            const mostrarTarea = misTask.find(task => task.id == id);
    
            return res.status(200).json({
                msg:'[+] Tarea encontrada con éxito',
                mostrarTarea
            })
        }
    } catch (error) {
        return res.status(500).json({
            msg:'[-] Internal Server Error.',
            error
        })
    }
}

export const borrarTarea = (req:Request,res:Response) => {

    try {
        const { id } = req.params;

        const existeTarea = misTask.findIndex(task => task.id == id);
    
        if(existeTarea == -1){
            return res.status(401).json({
                msg:'[-] Tarea no encontrada'
            })
        }else{
            misTask = misTask.filter(task => task.id !== id);
            
    
            return res.status(200).json({
                msg:'[+] Tarea borrada con éxito',
                misTask
            })
        }
 
    } catch (error) {
        return res.status(500).json({
            msg:'[-] Internal Server Error.',
            error
        })
    }
}

export const actualizarTarea = (req:Request,res:Response) => {
    try {
        const { id } = req.params;

        const existeTarea = misTask.findIndex(task => task.id == id);
    
        if(existeTarea == -1){
            return res.status(401).json({
                msg:'[-] Tarea no encontrada'
            })
        }else{
            misTask[existeTarea].completado = !misTask[existeTarea].completado;
            
            return res.status(200).json({
                msg:'[+] Tarea actualizada con éxito',
                tarea: misTask[existeTarea]
            })
        }
 
    } catch (error) {
        return res.status(500).json({
            msg:'[-] Internal Server Error.',
            error
        })
    }
}
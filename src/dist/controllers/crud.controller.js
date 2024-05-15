"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualizarTarea = exports.borrarTarea = exports.mostrarTarea = exports.mostrarTareas = exports.agregarTarea = void 0;
const tareas_1 = require("../db/tareas");
const uuid_1 = require("uuid");
let misTask = [...tareas_1.tareas];
const agregarTarea = (req, res) => {
    try {
        const { nombreTarea } = req.body;
        const tareaAgregada = {
            id: (0, uuid_1.v4)(),
            nombre: nombreTarea,
            completado: false
        };
        misTask.push(tareaAgregada);
        res.status(201).json({
            msg: '[+] Tarea agregada con éxito',
            misTask
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: '[-] Internal Server Error.',
            error
        });
    }
};
exports.agregarTarea = agregarTarea;
const mostrarTareas = (req, res) => {
    try {
        const t = misTask;
        return res.status(200).json({
            msg: '[+] Viendo tareas totales',
            tareas_totales: t
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: '[-] Internal Server Error.',
            error
        });
    }
};
exports.mostrarTareas = mostrarTareas;
const mostrarTarea = (req, res) => {
    try {
        const { id } = req.params;
        const existeTarea = misTask.findIndex(task => task.id == id);
        if (existeTarea == -1) {
            return res.status(401).json({
                msg: '[-] Tarea no encontrada'
            });
        }
        else {
            const mostrarTarea = misTask.find(task => task.id == id);
            return res.status(200).json({
                msg: '[+] Tarea encontrada con éxito',
                mostrarTarea
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            msg: '[-] Internal Server Error.',
            error
        });
    }
};
exports.mostrarTarea = mostrarTarea;
const borrarTarea = (req, res) => {
    try {
        const { id } = req.params;
        const existeTarea = misTask.findIndex(task => task.id == id);
        if (existeTarea == -1) {
            return res.status(401).json({
                msg: '[-] Tarea no encontrada'
            });
        }
        else {
            misTask = misTask.filter(task => task.id !== id);
            return res.status(200).json({
                msg: '[+] Tarea borrada con éxito',
                misTask
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            msg: '[-] Internal Server Error.',
            error
        });
    }
};
exports.borrarTarea = borrarTarea;
const actualizarTarea = (req, res) => {
    try {
        const { id } = req.params;
        const existeTarea = misTask.findIndex(task => task.id == id);
        if (existeTarea == -1) {
            return res.status(401).json({
                msg: '[-] Tarea no encontrada'
            });
        }
        else {
            misTask[existeTarea].completado = !misTask[existeTarea].completado;
            return res.status(200).json({
                msg: '[+] Tarea actualizada con éxito',
                tarea: misTask[existeTarea]
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            msg: '[-] Internal Server Error.',
            error
        });
    }
};
exports.actualizarTarea = actualizarTarea;

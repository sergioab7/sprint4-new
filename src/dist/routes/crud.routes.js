"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crud_controller_1 = require("../controllers/crud.controller");
const routes = (0, express_1.Router)();
routes.post("/agregar-tarea", crud_controller_1.agregarTarea)
    .get("/mostrar-tareas", crud_controller_1.mostrarTareas)
    .get("/mostrar-tarea/:id", crud_controller_1.mostrarTarea)
    .delete("/borrar-tarea/:id", crud_controller_1.borrarTarea)
    .put("/actualizar-tarea/:id", crud_controller_1.actualizarTarea);
exports.default = routes;

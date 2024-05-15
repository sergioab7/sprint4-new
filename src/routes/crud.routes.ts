import { Router } from "express";
import { actualizarTarea, agregarTarea, borrarTarea, mostrarTarea, mostrarTareas } from "../controllers/crud.controller";

const routes = Router();

routes.post("/agregar-tarea", agregarTarea)
      .get("/mostrar-tareas", mostrarTareas)
      .get("/mostrar-tarea/:id", mostrarTarea)
      .delete("/borrar-tarea/:id", borrarTarea)
      .put("/actualizar-tarea/:id", actualizarTarea);

export default routes;
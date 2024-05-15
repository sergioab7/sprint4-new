# REST API - Sprint 4.1

_Este proyecto ha sido desarrollado desde cero por [Sergio Andújar](https://github.com/sergioab7)._

_Aplicación creada para el sprint4.1 de IT Academy._

## Autor ✒️

* [Sergio Andújar](https://github.com/sergioab7) - *Todo el proyecto*

# Objetivos
En aquesta entrega crearem un servidor utilitzant Express.js, per proporcionar servei a l'API REST de la llista de tasques (TODO-LIST), aplicant l'arquitectura hexagonal. 

- ✅ Afegir una tasca a la llista: Implementarem una ruta i un controlador per permetre als usuaris afegir noves tasques a la seva llista.

- ✅ Marcar una tasca com a completada: Crearem una ruta i un controlador per a permetre als usuaris marcar una tasca com a completada.

- ✅ Eliminar una tasca de la llista: Implementarem una funcionalitat per eliminar tasques de la llista utilitzant una ruta i un controlador adequats.

- ✅ Mostrar la llista de tasques: Crearem una ruta i un controlador per obtenir i mostrar la llista completa de tasques als usuaris.

### Instalación 🔧
```
npm install
```
### Comandos para ejecutar ⌨️
```
npm run dev
```

## Arquitectura del proyecto 🛡

![Captura desde 2024-05-15 21-31-45](https://github.com/sergioab7/sprint4-new/assets/10132565/f25b89c6-24b4-42d4-a251-0e13fe623f60)

## Variables entorno (.env)

![Captura desde 2024-05-15 21-37-31](https://github.com/sergioab7/sprint4-new/assets/10132565/bac0d3eb-89e8-4eda-a5b4-cdf7112ef658)



### Rutas de la aplicación 🚏

_Actualizar el estado (completado) - PUT_
```
http://localhost:4002/crud/actualizar-tarea/:id
```
_Borrar tarea - DELETE_
```
http://localhost:4002/crud/borrar-tarea/:id
```
_Crear tarea - POST_
```
POST http://localhost:4002/crud/agregar-tarea
Content-Type: application/json

{
    "nombreTarea":"Comprar pan"
}
```
_Mostrar todas las tareas - GET_
```
http://localhost:4002/crud/mostrar-tareas
```
_Mostrar 1 tarea - GET_
```
http://localhost:4002/crud/mostrar-tarea/:id
```













import express, { Application } from "express";
import config from "../config";
import crudRoutes from "../routes/crud.routes";

class Server {

    private app:Application;
    private port:string;
    private path = {
        crud: '/crud'
    }

    constructor(){
        this.app = express();
        this.port = config.port as string;

        this.middleware();
        this.routes();
    }

    routes(){
        this.app.use(this.path.crud, crudRoutes);
    }

    middleware(){
        this.app.use(express.json());
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("[+] Servidor en escucha en el puerto: " + this.port);
        })
    }
}

export default Server;

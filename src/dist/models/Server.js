"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("../config"));
const crud_routes_1 = __importDefault(require("../routes/crud.routes"));
class Server {
    constructor() {
        this.path = {
            crud: '/crud'
        };
        this.app = (0, express_1.default)();
        this.port = config_1.default.port;
        this.middleware();
        this.routes();
    }
    routes() {
        this.app.use(this.path.crud, crud_routes_1.default);
    }
    middleware() {
        this.app.use(express_1.default.json());
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("[+] Servidor en escucha en el puerto: " + this.port);
        });
    }
}
exports.default = Server;

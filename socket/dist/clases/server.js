"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
const so = __importStar(require("../sockets/socket"));
// se utiliza el patron singleton para usar una sola instancia del server.
//constructor private y metodo getInstance()
class Server {
    constructor() {
        this.port = 5000;
        this.app = express_1.default();
        this.httpServer = new http_1.default.Server(this.app);
        this.io = socket_io_1.default(this.httpServer);
        this.testSocket();
    }
    static getInstance() {
        if (this.instance != null) {
            return this.instance;
        }
        return this.instance = new this();
    }
    testSocket() {
        console.log("escuchando conexiones");
        this.io.on('connection', cliente => {
            console.log('cliente conectado ', cliente.id);
            //voy a escuchar si se desconecta un cliente.
            so.desconectar(cliente);
            //escuchar mensaje del cliente y emitirlos
            so.mensaje(cliente, this.io);
        });
    }
    start(callback) {
        this.httpServer.listen(this.port, callback);
    }
}
exports.Server = Server;

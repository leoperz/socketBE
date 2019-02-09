"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./clases/server");
const route_1 = require("./routes/route");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const server = server_1.Server.getInstance();
//bodyParser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//bosyParser
//cors
server.app.use(cors_1.default({ origin: true, credentials: true }));
server.app.use('/', route_1.router);
server.start(() => {
    console.log("Servidor corriendo en el puerto " + server.port);
});

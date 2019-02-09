import express from 'express';
import socketIo from 'socket.io';
import http from 'http';
import * as so from '../sockets/socket';

// se utiliza el patron singleton para usar una sola instancia del server.
//constructor private y metodo getInstance()
export class Server {

    private static instance : Server 
    public app: express.Application;
    public port: number = 5000;
    public io: socketIo.Server;
    private httpServer: http.Server;

    private constructor(){
        this.app = express();
        this.httpServer = new http.Server(this.app);
        this.io = socketIo(this.httpServer);
        this.testSocket();
    }

    public static getInstance(){
        if(this.instance!= null){
            return this.instance;
        }
        return  this.instance = new this();
    }

    private testSocket(){
        console.log("escuchando conexiones");
        this.io.on('connection', cliente=>{
            console.log('cliente conectado ', cliente.id);

            //voy a escuchar si se desconecta un cliente.
            so.desconectar(cliente);
            
            
            //escuchar mensaje del cliente y emitirlos
            so.mensaje(cliente,this.io);
            
        });

        
    }


    start(callback: Function){
        this.httpServer.listen(this.port, callback);
    }
}
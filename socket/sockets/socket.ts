import { Socket } from 'socket.io';

export const desconectar = (cliente:Socket)=>{
    cliente.on('disconnect',()=>{
        console.log('cliente desconectado');
    });

};

//escucho los mensajes
export const mensaje = (cliente:Socket, io: SocketIO.Server)=>{
    cliente.on('mensaje', (payload)=>{
        console.log('mensaje recibido: ',payload)

        //Una vez escuchado los mensajes los emito;
    io.emit('mensaje-nuevo',payload );    
    });
};




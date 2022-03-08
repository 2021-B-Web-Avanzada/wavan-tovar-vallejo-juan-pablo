import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { Server, Socket } from 'socket.io';


@WebSocketGateway(
    8080,
    {
        cors: {
            origin: '*',
        },
    }
)

export class EventosGateway {
    @SubscribeMessage('hola')
    devolverHola(@MessageBody() message: {nombre:string}, @ConnectedSocket() socket: Socket) {
        socket.broadcast
            .emit(
                'escucharEventoHola',
                {
                    mensajes:'Bienvenidos' + message.nombre
                }
            )
        return 'ok';
    }

    @SubscribeMessage('unirseSala')
    unirseSala(
        @MessageBody()
            message: {salaId: string, nombre: string},
        @ConnectedSocket()
            socket: Socket
    ){
        socket.join(message.salaId);
        const mensajeAEnviar: any = {
            mensaje: 'Bienvenido' + message.nombre
        };
        socket.broadcast
            .to(message.salaId)
            .emit(
                'escucharEventoUnirseSala',
                mensajeAEnviar
            );
        return 'ok';
    }

    @SubscribeMessage('enviarMensaje')
    enviarMensaje(
        @MessageBody()
            message: {salaId: string, nombre: string, mensaje:string},
        @ConnectedSocket()
            socket: Socket
    ){
        const nuevoMensaje = {
            nombre: message.nombre,
            mensaje: message.mensaje,
            salaId: message.salaId
            } as any;
        socket.broadcast
            .to(message.salaId)
            .emit(
                'escucharEventoMensajeSala',
                nuevoMensaje
            );
        return 'ok';
    }
}
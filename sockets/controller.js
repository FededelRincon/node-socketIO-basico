


const socketController = ( socket ) => {

    //cuando se conecta un cliente
    console.log('Cliente conectado', socket.id );

    //cuando se desconecta un cliente
    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id )
    })

    //haciendo un retorno a esta persona
    socket.on('enviar-mensaje', ( payload, callback ) => {
        // console.log( payload )

        //mandar msj a todos los clientes conectado
        // socket.emit('enviar-mensaje', 'Desde el server') 

        const id = 123456;
        callback( id );
        // callback( new Date().getTime() );
        // callback({
        //     id,
        //     fecha: new Date().getTime()
        // });
        
        //envia msj a si mismo...
        // socket.emit('enviar-mensaje', payload) 

        //envia msj a todos
        socket.broadcast.emit('enviar-mensaje', payload) 
        
    })
}


module.exports = {
    socketController
}
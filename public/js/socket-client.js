//Referencias desde el html
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');




// console.log('Hola mundo desde socket-client');

const socket = io();


socket.on('connect', () => {
    // console.log('Conectado - msj desde el front');

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});


socket.on('disconnect', () => {
    console.log('Desconectado - msj desde el front');

    lblOffline.style.display = '';
    lblOnline.style.display = 'none';

});

socket.on('enviar-mensaje', (payload) => {
    console.log(payload)
})


btnEnviar.addEventListener('click', () => {

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: 'uid-123-abc',
        fecha: new Date().getTime()
    }

    // socket.emit( 'enviar-mensaje', payload );
    socket.emit( 'enviar-mensaje', payload, ( id ) => {
        console.log('desde el server', id);
    } );

});






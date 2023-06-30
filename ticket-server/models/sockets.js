const TicketList = require("./ticketList");

class Sockets {

    constructor( io ) {

        this.io = io;
        // Crear instancia de nuestro ticketList
        this.ticketList = new TicketList();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            console.log('Cliente conectado!!');
            
            // Crear Ticket
            socket.on('ticket-required', (data, callback) => {
                const newTicket = this.ticketList.crearTicket();
                callback( newTicket );
            });

            // Asignar Ticket
            socket.on('next-ticket', (data, callback) => {
                const ticket = this.ticketList.asignarTicket(data.agent, data.desk);
                callback( ticket );

                // Obtener Listado de Ticket
                this.io.emit('called-ticket', this.ticketList.ultimos13());
            });
            
        });
    }


}


module.exports = Sockets;
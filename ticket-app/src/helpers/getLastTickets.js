

export const getLastTickets = async() => {

    const resp = await fetch('http://localhost:8080/api/tickets');
    const tickets = await resp.json();

    return tickets.data;

}
class Ticket {
    private destination: string;
    private price: number;
    private status: string;

    constructor(destination: string, price: number, status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function manage(ticketArray, criteria) {
    let tickets : Ticket[] = [];
    for (let i = 0; i < ticketArray.length; i++) {
        let destinationName: string = ticketArray[i].split('|')[0];
        let ticketPrice: number = Number(ticketArray[i].split('|')[1]);
        let status = ticketArray[i].split('|')[2];

        let ticket = new Ticket(destinationName, ticketPrice, status);
        tickets.push(ticket);
    }
    
    return tickets.sort((a, b) => a[criteria] - b[criteria]);
}

console.log(manage([
    'Philadelphia|94.20|available',
     'New York City|95.99|available',
     'New York City|95.99|sold',
     'Boston|126.20|departed'
    ],
    'status'));
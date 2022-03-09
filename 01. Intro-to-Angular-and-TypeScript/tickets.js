var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function manage(ticketArray, criteria) {
    var tickets = [];
    for (var i = 0; i < ticketArray.length; i++) {
        var destinationName = ticketArray[i].split('|')[0];
        var ticketPrice = Number(ticketArray[i].split('|')[1]);
        var status_1 = ticketArray[i].split('|')[2];
        var ticket = new Ticket(destinationName, ticketPrice, status_1);
        tickets.push(ticket);
    }
    return tickets.sort(function (a, b) { return a[criteria] - b[criteria]; });
}
console.log(manage([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status'));

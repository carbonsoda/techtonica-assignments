/**
 * Lesson: https://github.com/Techtonica/curriculum/blob/main/javascript/first-js-oop-project.md
 * Starter code included some jQuery and Event constructor
 * + example events
 */

class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = [];
    }

    addAvailableTickets(typeName, price) {
        this.availableTickets.push(new TicketType(typeName, price));
    }

    allTickets() {
        let ticketsAll = "All tickets: ";
        let i = 1;
        for (let ticket of this.availableTickets) {
            ticketsAll += `${i}. ${ticket.name} ($${ticket.price}) `;
            i++;
        }
        return ticketsAll;
    }

    searchTickets(minPrice=0, maxPrice) {
        let eligibleTickets = '';

        // counter for how many tickets are eligible
        let numEligible = 0;
        for (let ticket of this.availableTickets) {
            if (ticket.price >= minPrice && ticket.price <= maxPrice) {
                eligibleTickets += `${++numEligible}. ${ticket.name} ($${ticket.price}) `;
            }
        }

        if (numEligible == 0) {
            eligibleTickets = 'No tickets available.';
        } else if (numEligible == this.availableTickets.length) {
            eligibleTickets = 'All tickets fit this range.';
        }

        return eligibleTickets;
    }

    // Find the cheapest ticket in this event
    // Returns formatted string
    cheapestTicket() {
        // If length < 1 --> no tickets available
        if (!this.availableTickets.length) return 'None';

        let cheapest = this.availableTickets[0];

        for (let i = 1; i < this.availableTickets.length; i++) {
            if (this.availableTickets[i].price < cheapest.price) {
                cheapest = this.availableTickets[i];
            }
        }

        return `${cheapest.name} for $${cheapest.price}`;
    }
}

class TicketType {
    constructor(typeName, price) {
        this.name = typeName;
        this.price = price;
    }
}

const eventObj1 = new Event(
    'KLOS Golden Gala',
    'An evening with hollywood vampires'
);

const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');

const eventArray = [];
// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);
console.log(eventArray);

eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);

eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)

eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)



function rangeResults(minRange, maxRange) {
    let output = '';

    if (!minRange && !maxRange) {
        // do nothing
        return output;
    }

    for (let event of eventArray) {
        output += `<li> ${event.name}:`
        +`<br>${event.searchTickets(minRange, maxRange)}</li>`;
    }
    return output;
}


$(document).ready(function () {
    let htmlEvent = '';
    $.each(eventArray, function (index, item) {
        htmlEvent += `<li>${item.name} - ${item.description}`
            + `<br> ${item.allTickets()}`
            + `<br> Lowest price: ${item.cheapestTicket()}</li>`;
    });
    // insert final html into #event...
    $('#event').html(htmlEvent);

    let htmlRange = '';
    $('#rangeBtn').click(function () {
        let min = $('#minRange').val();
        let max = $('#maxRange').val();
        htmlRange = rangeResults(min, max);
        $('#ticketResults').html(htmlRange);
    });
});

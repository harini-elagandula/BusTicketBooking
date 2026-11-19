
let availableSeats = 20;
let ticketPrice = 300;

document.getElementById("bookingForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let date = document.getElementById("date").value;
    let seats = Number(document.getElementById("seats").value);

    let result = document.getElementById("result");

    if (seats <= 0) {
        result.innerHTML = "Please enter valid seats!";
    }

    else if (seats > availableSeats) {
        result.innerHTML = "Sorry! Seats are not available.";
    }

    else {
        let total = seats * ticketPrice;

        availableSeats = availableSeats - seats;

        result.innerHTML =
            "<h3>Booking Successful!</h3>" +
            "Passenger Name: " + name + "<br>" +
            "Source: " + source + "<br>" +
            "Destination: " + destination + "<br>" +
            "Journey Date: " + date + "<br>" +
            "Number of Seats: " + seats + "<br>" +
            "Total Price: ₹" + total + "<br>" +
            "Available Seats: " + availableSeats;
    }

});

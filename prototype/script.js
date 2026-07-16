// Booking Form


const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Your room has been booked successfully!");

        window.location.href = "my-booking.html";

    });

}

const cancelButtons = document.querySelectorAll(".cancel-booking-btn");

cancelButtons.forEach(button => {

    button.addEventListener("click", function(){

        if(confirm("Are you sure you want to cancel this booking?")){

            this.closest("tr").remove();

            alert("Booking cancelled successfully.");

        }

    });

});
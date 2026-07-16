// Booking Form


const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Your room has been booked successfully!");

        window.location.href = "my-booking.html";

    });

}

// Booking

const bookingTableBody = document.getElementById("bookingTableBody");

if (bookingTableBody) {

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    bookingTableBody.innerHTML = "";

    bookings.forEach((booking, index) => {

        bookingTableBody.innerHTML += `

            <tr>

                <td>${booking.room}</td>

                <td>${booking.date}</td>

                <td>${booking.startTime} - ${booking.endTime}</td>

                <td>${booking.purpose}</td>

                <td>
                    <span class="status pending">
                        ${booking.status}
                    </span>
                </td>

                <td>
                    <button class="cancel-booking-btn" data-index="${index}">
                        Cancel
                    </button>
                </td>

            </tr>

        `;

    });

}

// Cancel Booking
const cancelButtons = document.querySelectorAll(".cancel-booking-btn");

cancelButtons.forEach(button => {

    button.addEventListener("click", function(){

        if(confirm("Are you sure you want to cancel this booking?")){

            this.closest("tr").remove();

            alert("Booking cancelled successfully.");

        }

    });

});


/* ===========================
        ADD ROOM
=========================== */

const roomForm = document.getElementById("roomForm");

if (roomForm) {

    roomForm.addEventListener("submit", function(e){

        e.preventDefault();

        const roomName = document.getElementById("roomName").value;
        const roomCapacity = document.getElementById("roomCapacity").value;
        const roomLocation = document.getElementById("roomLocation").value;

        // Read existing rooms
        let rooms = JSON.parse(localStorage.getItem("rooms")) || [];

        // Add the new room
        rooms.push({

            room: roomName,

            capacity: roomCapacity,

            location: roomLocation,

            status: "Available"

        });

        // Save back to Local Storage
        localStorage.setItem("rooms", JSON.stringify(rooms));

        // Refresh the admin table
        renderRooms();

        roomForm.reset();

    });

}
function renderRooms(){

    const tbody = document.getElementById("roomTableBody");

    if(!tbody) return;

    const rooms = JSON.parse(localStorage.getItem("rooms")) || [];

    tbody.innerHTML = "";

    rooms.forEach((room,index)=>{

        tbody.innerHTML += `

        <tr>

            <td>${room.room}</td>

            <td>${room.capacity}</td>

            <td>${room.location}</td>

            <td>

                <select class="room-status" data-index="${index}">

                    <option value="Available" ${room.status==="Available"?"selected":""}>Available</option>

                    <option value="Booked" ${room.status==="Booked"?"selected":""}>Booked</option>

                    <option value="Pending" ${room.status==="Pending"?"selected":""}>Pending</option>

                </select>

            </td>

            <td>

                <button class="edit-btn">Edit</button>

                <button class="delete-btn">Delete</button>

            </td>

        </tr>

        `;

    });

}

document.addEventListener("change", function(e){

    if(!e.target.classList.contains("room-status")) return;

    const index = e.target.dataset.index;

    let rooms = JSON.parse(localStorage.getItem("rooms")) || [];

    rooms[index].status = e.target.value;

    localStorage.setItem("rooms", JSON.stringify(rooms));

    renderStudentRooms();

});


document.addEventListener("DOMContentLoaded", function () {

    renderRooms();

    renderStudentRooms();

});

function renderStudentRooms(){

    const container = document.querySelector(".rooms-grid");

    if(!container) return;

    const rooms = JSON.parse(localStorage.getItem("rooms")) || [];

    container.innerHTML = "";

    rooms.forEach(room=>{

        container.innerHTML += `

        <div class="room-card">

            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
                 class="room-image">

            <div class="room-info">

                <h2>${room.room}</h2>

                <p>Capacity: ${room.capacity} Students</p>

                <p>Location: ${room.location}</p>

                <p>Status: ${room.status}</p>

            </div>

            <a href="booking.html" class="book-btn">

                Book Room

            </a>

        </div>

        `;

    });

}
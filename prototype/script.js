/* ==========================================
   ROOM BOOKING SYSTEM - script.js
   Using LocalStorage (No Backend)
========================================== */


/* ===========================
      GLOBAL VARIABLES
=========================== */

let currentPage = 1;
const rowsPerPage = 10;

let bookingCurrentPage = 1;
const bookingRowsPerPage = 10;

// Student Available Rooms Pagination
let studentRoomCurrentPage = 1;
const studentRoomRowsPerPage = 6;

/* ===========================
      LOCAL STORAGE HELPERS
=========================== */

function getRooms() {
    return JSON.parse(localStorage.getItem("rooms")) || [];
}

function saveRooms(rooms) {
    localStorage.setItem("rooms", JSON.stringify(rooms));
}

function getBookings() {
    return JSON.parse(localStorage.getItem("bookings")) || [];
}

function saveBookings(bookings) {
    localStorage.setItem("bookings", JSON.stringify(bookings));
}


/* ===========================
      INITIALIZE SYSTEM
=========================== */

document.addEventListener("DOMContentLoaded", function () {

    renderRooms();
    renderStudentRooms();

    loadBookingRoomOptions();

    renderBookings();

    renderBookingRequests();

});


/* =================================================
                ADMIN ROOM MANAGEMENT
================================================= */


/* Add Room */

const roomForm = document.getElementById("roomForm");

if (roomForm) {

    roomForm.addEventListener("submit", function (e) {

        e.preventDefault();


        const newRoom = {

            room:
                document.getElementById("roomName").value,

            capacity:
                document.getElementById("roomCapacity").value,

            location:
                document.getElementById("roomLocation").value,

            status: "Available"

        };


        let rooms = getRooms();

        rooms.push(newRoom);

        saveRooms(rooms);


        renderRooms();
        renderStudentRooms();


        roomForm.reset();

    });

}



/* Display Admin Room Table */

function renderRooms() {

    const tbody =
        document.getElementById("roomTableBody");


    if (!tbody) return;


    const rooms = getRooms();


    tbody.innerHTML = "";


    const start =
        (currentPage - 1) * rowsPerPage;


    const pageRooms =
        rooms.slice(start, start + rowsPerPage);



    pageRooms.forEach((room, index) => {


        tbody.innerHTML += `

        <tr>

            <td>${start + index + 1}</td>

            <td>${room.room}</td>

            <td>${room.capacity}</td>

            <td>${room.location}</td>


            <td>

                <select 
                data-index="${start + index}">

                    <option 
                    ${room.status === "Available" ? "selected" : ""}>
                    Available
                    </option>


                    <option 
                    ${room.status === "Booked" ? "selected" : ""}>
                    Booked
                    </option>


                    <option 
                    ${room.status === "Pending" ? "selected" : ""}>
                    Pending
                    </option>

                </select>

            </td>


            <td>

                <button class="edit-btn">
                Edit
                </button>


                <button class="delete-btn">
                Delete
                </button>

            </td>


        </tr>

        `;


    });



    updateRoomPagination();

}



/* Update Room Status */

document.addEventListener("change", function (e) {


    if (!e.target.classList.contains("room-status"))
        return;


    let rooms = getRooms();


    const index = e.target.dataset.index;


    rooms[index].status = e.target.value;


    saveRooms(rooms);


    renderStudentRooms();


});



/* Admin Room Pagination */

function updateRoomPagination() {

    const pageInfo =
        document.getElementById("pageInfo");


    if (!pageInfo) return;


    const rooms = getRooms();


    const totalPages =
        Math.max(1, Math.ceil(
            rooms.length / rowsPerPage
        ));


    pageInfo.textContent =
        `Page ${currentPage} of ${totalPages}`;

}



const prevBtn =
    document.getElementById("prevPage");


if (prevBtn) {

    prevBtn.onclick = function () {

        if (currentPage > 1) {

            currentPage--;

            renderRooms();

        }

    }

}



const nextBtn =
    document.getElementById("nextPage");


if (nextBtn) {

    nextBtn.onclick = function () {


        const totalPages =
            Math.ceil(
                getRooms().length / rowsPerPage
            );


        if (currentPage < totalPages) {

            currentPage++;

            renderRooms();

        }


    }

}





/* =================================================
                STUDENT ROOM DISPLAY
================================================= */


// function renderStudentRooms() {

//     const container =
//         document.querySelector(".rooms-grid");

//     if (!container) return;

//     const rooms = getRooms();

//     // Only show available rooms
//     const availableRooms =
//         rooms.filter(room => room.status === "Available");

//     container.innerHTML = "";

//     // Calculate starting position
//     const start =
//         (studentRoomCurrentPage - 1)
//         * studentRoomRowsPerPage;

//     // Get only rooms for current page
//     const pageRooms =
//         availableRooms.slice(
//             start,
//             start + studentRoomRowsPerPage
//         );


//     // Display rooms
//     pageRooms.forEach(room => {

//         container.innerHTML += `

//         <div class="room-card">

//             <img
//                 src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
//                 class="room-image"
//             >

//             <div class="room-info">

//                 <h2>${room.room}</h2>

//                 <p>
//                     Capacity: ${room.capacity} Students
//                 </p>

//                 <p>
//                     Location: ${room.location}
//                 </p>

//                 <p>
//                     Status: ${room.status}
//                 </p>

//             </div>

//             <a
//                 href="booking.html?room=${encodeURIComponent(room.room)}"
//                 class="book-btn"
//             >
//                 Book Room
//             </a>

//         </div>

//         `;

//     });


//     updateStudentRoomPagination(
//         availableRooms.length
//     );

// }

// Available Rooms Pagination

/* ===========================
   STUDENT AVAILABLE ROOMS
=========================== */

function renderStudentRooms() {

    const container =
        document.querySelector(".rooms-grid");

    if (!container) return;


    // Get all rooms
    const rooms = getRooms();


    // Get search input
    const searchInput =
        document.getElementById("searchRoom");


    // Get search text
    const searchText =
        searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";


    // Only show Available rooms
    // AND match room name or location
    const availableRooms =
        rooms.filter(room => {

            if (room.status !== "Available") {
                return false;
            }


            const roomName =
                room.room.toLowerCase();

            const location =
                room.location.toLowerCase();


            return (
                roomName.includes(searchText)
                ||
                location.includes(searchText)
            );

        });


    // Clear current cards
    container.innerHTML = "";


    // Reset pagination when searching
    const start =
        (studentRoomCurrentPage - 1)
        * studentRoomRowsPerPage;


    // Get rooms for current page
    const pageRooms =
        availableRooms.slice(
            start,
            start + studentRoomRowsPerPage
        );


    // No rooms found
    if (pageRooms.length === 0) {

        container.innerHTML = `

            <div class="no-rooms-message">

                <h2>No Available Rooms Found</h2>

                <p>
                    Try searching for another room name
                    or location.
                </p>

            </div>

        `;

    }


    // Display room cards
    pageRooms.forEach(room => {

        container.innerHTML += `

        <div class="room-card">

            <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
                class="room-image"
            >


            <div class="room-info">

                <h2>${room.room}</h2>

                <p>
                    Capacity:
                    ${room.capacity}
                    Students
                </p>

                <p>
                    Location:
                    ${room.location}
                </p>

                <p>
                    Status:
                    ${room.status}
                </p>

            </div>


            <a
                href="booking.html?room=${encodeURIComponent(room.room)}"
                class="book-btn"
            >
                Book Room
            </a>

        </div>

        `;

    });


    // Update pagination
    updateStudentRoomPagination(
        availableRooms.length
    );

}

/* ===========================
   ROOM SEARCH
=========================== */

const searchBtn =
    document.getElementById("searchBtn");

const searchInput =
    document.getElementById("searchRoom");


if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        function () {

            // Start from page 1
            studentRoomCurrentPage = 1;

            renderStudentRooms();

        }
    );

}


if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        function (e) {

            // Search when pressing Enter
            if (e.key === "Enter") {

                studentRoomCurrentPage = 1;

                renderStudentRooms();

            }

        }
    );

}

function updateStudentRoomPagination(totalRooms) {

    const totalPages =
        Math.max(
            1,
            Math.ceil(
                totalRooms / studentRoomRowsPerPage
            )
        );


    const pageInfo =
        document.getElementById(
            "studentRoomPageInfo"
        );

    if (pageInfo) {

        pageInfo.textContent =
            `Page ${studentRoomCurrentPage} of ${totalPages}`;

    }


    const prevBtn =
        document.getElementById(
            "studentRoomPrevPage"
        );

    const nextBtn =
        document.getElementById(
            "studentRoomNextPage"
        );


    if (prevBtn) {

        prevBtn.disabled =
            studentRoomCurrentPage === 1;

    }


    if (nextBtn) {

        nextBtn.disabled =
            studentRoomCurrentPage >= totalPages;

    }

}

/* Student Rooms - Previous Page */

document.addEventListener("click", function(e) {

    if (
        e.target.id !==
        "studentRoomPrevPage"
    ) return;


    if (studentRoomCurrentPage > 1) {

        studentRoomCurrentPage--;

        renderStudentRooms();

    }

});


/* Student Rooms - Next Page */

document.addEventListener("click", function(e) {

    if (
        e.target.id !==
        "studentRoomNextPage"
    ) return;


    const rooms = getRooms();


    const availableRooms =
        rooms.filter(
            room =>
                room.status === "Available"
        );


    const totalPages =
        Math.ceil(
            availableRooms.length
            / studentRoomRowsPerPage
        );


    if (
        studentRoomCurrentPage
        < totalPages
    ) {

        studentRoomCurrentPage++;

        renderStudentRooms();

    }

});




/* =================================================
                BOOKING FORM
================================================= */



function loadBookingRoomOptions() {


    const select =
        document.getElementById("roomSelect");


    if (!select) return;



    const rooms = getRooms();



    rooms.forEach(room => {


        if (room.status === "Available") {


            select.innerHTML += `

            <option value="${room.room}">
            ${room.room}
            </option>

            `;

        }


    });



    const params =
        new URLSearchParams(window.location.search);


    const selected =
        params.get("room");


    if (selected) {

        select.value = selected;

    }


}





const bookingForm =
    document.getElementById("bookingForm");



if (bookingForm) {


    bookingForm.addEventListener("submit", function (e) {


        e.preventDefault();



        const booking = {


            student:
                document.getElementById("studentName").value,


            room:
                document.getElementById("roomSelect").value,


            date:
                document.getElementById("bookingDate").value,


            startTime:
                document.getElementById("startTime").value,


            endTime:
                document.getElementById("endTime").value,


            purpose:
                document.getElementById("purpose").value,


            status: "Pending"

        };



        let bookings = getBookings();


        bookings.push(booking);


        saveBookings(bookings);



        let rooms = getRooms();


        rooms.forEach(room => {


            if (room.room === booking.room) {

                room.status = "Pending";

            }


        });


        saveRooms(rooms);



        alert(
            "Booking request submitted successfully!"
        );


        window.location.href =
            "my-booking.html";


    });


}




/* =================================================
              STUDENT BOOKINGS TABLE
================================================= */


function renderBookings() {

    const tbody = document.getElementById("bookingTableBody");

    if (!tbody) return;

    const bookings = getBookings();

    tbody.innerHTML = "";

    // Calculate starting position
    const start = (bookingCurrentPage - 1) * bookingRowsPerPage;

    // Get bookings for current page
    const pageBookings = bookings.slice(
        start,
        start + bookingRowsPerPage
    );

    // Display bookings
    pageBookings.forEach((booking, index) => {

        tbody.innerHTML += `

        <tr>

            <td>${start + index + 1}</td>

            <td>${booking.room}</td>

            <td>${booking.date}</td>

            <td>
                ${booking.startTime} - ${booking.endTime}
            </td>

            <td>${booking.purpose}</td>

            <td>
                <span class="room-status ${booking.status.toLowerCase()}">
                    ${booking.status}
                </span>
            </td>

            <td>
                <button 
                    class="cancel-booking-btn"
                    data-index="${start + index}">
                    Cancel
                </button>
            </td>

        </tr>

        `;

    });

    // Update pagination information
    updateBookingPagination();

}

function updateBookingPagination() {

    const bookings = getBookings();

    const totalPages = Math.max(
        1,
        Math.ceil(bookings.length / bookingRowsPerPage)
    );

    const pageInfo = document.getElementById("bookingPageInfo");

    if (pageInfo) {
        pageInfo.textContent =
            `${bookingCurrentPage} of ${totalPages}`;
    }

    const prevButton =
        document.getElementById("bookingPrevPage");

    const nextButton =
        document.getElementById("bookingNextPage");

    if (prevButton) {
        prevButton.disabled =
            bookingCurrentPage === 1;
    }

    if (nextButton) {
        nextButton.disabled =
            bookingCurrentPage === totalPages;
    }

}

const bookingPrevButton =
    document.getElementById("bookingPrevPage");

const bookingNextButton =
    document.getElementById("bookingNextPage");


if (bookingPrevButton) {

    bookingPrevButton.addEventListener("click", function () {

        if (bookingCurrentPage > 1) {

            bookingCurrentPage--;

            renderBookings();

        }

    });

}


if (bookingNextButton) {

    bookingNextButton.addEventListener("click", function () {

        const bookings = getBookings();

        const totalPages = Math.ceil(
            bookings.length / bookingRowsPerPage
        );

        if (bookingCurrentPage < totalPages) {

            bookingCurrentPage++;

            renderBookings();

        }

    });

}



/* Cancel Booking */


/* ===========================
      CANCEL BOOKING
=========================== */

document.addEventListener("click", function (e) {

    if (!e.target.classList.contains("cancel-booking-btn")) {
        return;
    }

    // Show confirmation box
    if (!confirm("Are you sure you want to cancel this booking?")) {
        return;
    }

    // Get booking and room data
    let bookings = getBookings();
    let rooms = getRooms();

    // Get the booking index
    const index = Number(e.target.dataset.index);

    // Get the booking before removing it
    const booking = bookings[index];

    if (!booking) {
        return;
    }

    // Change the room status back to Available
    rooms.forEach(room => {

        if (room.room === booking.room) {

            room.status = "Available";

        }

    });

    // Remove the booking
    bookings.splice(index, 1);

    // Save updated data
    saveBookings(bookings);
    saveRooms(rooms);

    // Refresh student booking table
    renderBookings();

    // Refresh student's available rooms
    renderStudentRooms();

    // Refresh admin room table
    renderRooms();

    // Refresh admin booking requests
    renderBookingRequests();

    alert("Booking cancelled successfully!");

});





/* =================================================
              ADMIN BOOKING REQUESTS
================================================= */


function renderBookingRequests() {


    const tbody =
        document.getElementById("bookingRequestBody");


    if (!tbody) return;



    const bookings = getBookings();

    const rooms = getRooms();


    tbody.innerHTML = "";



    let no = 1;



    bookings.forEach((booking, index) => {


        if (booking.status !== "Pending")
            return;



        const room =
            rooms.find(
                r => r.room === booking.room
            );



        tbody.innerHTML += `

        <tr>


        <td>${no++}</td>

        <td>${booking.student}</td>

        <td>${booking.room}</td>

        <td>${room ? room.location : "-"}</td>

        <td>${booking.date}</td>


        <td>
        ${booking.startTime} -
        ${booking.endTime}
        </td>


        <td>${booking.purpose}</td>


        <td>


        <button class="approve-btn"
        data-index="${index}">
        Approve
        </button>


        <button class="reject-btn"
        data-index="${index}">
        Reject
        </button>


        </td>


        </tr>

        `;


    });


}



/* ===========================
      APPROVE / REJECT
=========================== */

document.addEventListener("click", function (e) {

    let bookings = getBookings();
    let rooms = getRooms();

    /* ===========================
          APPROVE BOOKING
    =========================== */

    if (e.target.classList.contains("approve-btn")) {

        const index = e.target.dataset.index;

        // Show confirmation box
        const confirmApprove = confirm(
            "Are you sure you want to approve this booking?"
        );

        // If admin clicks Cancel
        if (!confirmApprove) {
            return;
        }

        // Change booking status
        bookings[index].status = "Booked";

        // Change room status
        rooms.forEach(room => {

            if (room.room === bookings[index].room) {

                room.status = "Booked";

            }

        });

        alert("Booking approved successfully!");

    }


    /* ===========================
          REJECT BOOKING
    =========================== */

    if (e.target.classList.contains("reject-btn")) {

        const index = e.target.dataset.index;

        // Show confirmation box
        const confirmReject = confirm(
            "Are you sure you want to reject this booking?"
        );

        // If admin clicks Cancel
        if (!confirmReject) {
            return;
        }

        // Change booking status
        bookings[index].status = "Rejected";

        // Make room available again
        rooms.forEach(room => {

            if (room.room === bookings[index].room) {

                room.status = "Available";

            }

        });

        alert("Booking rejected successfully!");

    }


    // Save changes
    saveBookings(bookings);
    saveRooms(rooms);

    // Refresh pages
    renderBookingRequests();
    renderStudentRooms();
    renderBookings();

});
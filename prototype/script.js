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

    roomForm.addEventListener("submit", function(e){

        e.preventDefault();


        const newRoom = {

            room:
            document.getElementById("roomName").value,

            capacity:
            document.getElementById("roomCapacity").value,

            location:
            document.getElementById("roomLocation").value,

            status:"Available"

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

function renderRooms(){

    const tbody =
    document.getElementById("roomTableBody");


    if(!tbody) return;


    const rooms = getRooms();


    tbody.innerHTML="";


    const start =
    (currentPage - 1) * rowsPerPage;


    const pageRooms =
    rooms.slice(start,start + rowsPerPage);



    pageRooms.forEach((room,index)=>{


        tbody.innerHTML += `

        <tr>

            <td>${start + index + 1}</td>

            <td>${room.room}</td>

            <td>${room.capacity}</td>

            <td>${room.location}</td>


            <td>

                <select 
                data-index="${start+index}">

                    <option 
                    ${room.status==="Available"?"selected":""}>
                    Available
                    </option>


                    <option 
                    ${room.status==="Booked"?"selected":""}>
                    Booked
                    </option>


                    <option 
                    ${room.status==="Pending"?"selected":""}>
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

document.addEventListener("change",function(e){


    if(!e.target.classList.contains("room-status"))
    return;


    let rooms=getRooms();


    const index=e.target.dataset.index;


    rooms[index].status=e.target.value;


    saveRooms(rooms);


    renderStudentRooms();


});



/* Room Pagination */

function updateRoomPagination(){

    const pageInfo=
    document.getElementById("pageInfo");


    if(!pageInfo) return;


    const rooms=getRooms();


    const totalPages=
    Math.max(1,Math.ceil(
        rooms.length / rowsPerPage
    ));


    pageInfo.textContent=
    `Page ${currentPage} of ${totalPages}`;

}



const prevBtn=
document.getElementById("prevPage");


if(prevBtn){

    prevBtn.onclick=function(){

        if(currentPage>1){

            currentPage--;

            renderRooms();

        }

    }

}



const nextBtn=
document.getElementById("nextPage");


if(nextBtn){

    nextBtn.onclick=function(){


        const totalPages=
        Math.ceil(
            getRooms().length / rowsPerPage
        );


        if(currentPage<totalPages){

            currentPage++;

            renderRooms();

        }


    }

}





/* =================================================
                STUDENT ROOM DISPLAY
================================================= */


function renderStudentRooms(){

    const container=
    document.querySelector(".rooms-grid");


    if(!container) return;



    const rooms=getRooms();


    container.innerHTML="";



    rooms.forEach(room=>{


        if(room.status!=="Available")
        return;



        container.innerHTML += `

        <div class="room-card">


            <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
            class="room-image">


            <div class="room-info">


                <h2>${room.room}</h2>


                <p>
                Capacity: ${room.capacity} Students
                </p>


                <p>
                Location: ${room.location}
                </p>


                <p>
                Status: ${room.status}
                </p>


            </div>



            <a href="booking.html?room=${encodeURIComponent(room.room)}"
            class="book-btn">

                Book Room

            </a>



        </div>

        `;


    });


}




/* =================================================
                BOOKING FORM
================================================= */



function loadBookingRoomOptions(){


    const select=
    document.getElementById("roomSelect");


    if(!select) return;



    const rooms=getRooms();



    rooms.forEach(room=>{


        if(room.status==="Available"){


            select.innerHTML +=`

            <option value="${room.room}">
            ${room.room}
            </option>

            `;

        }


    });



    const params=
    new URLSearchParams(window.location.search);


    const selected=
    params.get("room");


    if(selected){

        select.value=selected;

    }


}





const bookingForm=
document.getElementById("bookingForm");



if(bookingForm){


bookingForm.addEventListener("submit",function(e){


    e.preventDefault();



    const booking={


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


        status:"Pending"

    };



    let bookings=getBookings();


    bookings.push(booking);


    saveBookings(bookings);



    let rooms=getRooms();


    rooms.forEach(room=>{


        if(room.room===booking.room){

            room.status="Pending";

        }


    });


    saveRooms(rooms);



    alert(
    "Booking request submitted successfully!"
    );


    window.location.href=
    "my-booking.html";


});


}




/* =================================================
              STUDENT BOOKINGS TABLE
================================================= */


function renderBookings(){


    const tbody=
    document.getElementById("bookingTableBody");


    if(!tbody) return;



    const bookings=getBookings();


    tbody.innerHTML="";



    const start=
    (bookingCurrentPage-1)
    * bookingRowsPerPage;



    const pageBookings=
    bookings.slice(
        start,
        start+bookingRowsPerPage
    );



    pageBookings.forEach((booking,index)=>{


        tbody.innerHTML+=`

        <tr>

        <td>${start+index+1}</td>

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

        <button class="cancel-booking-btn"
        data-index="${start+index}">

        Cancel

        </button>


        </td>


        </tr>

        `;


    });


}



/* Cancel Booking */


document.addEventListener("click",function(e){


    if(!e.target.classList.contains(
        "cancel-booking-btn"
    ))
    return;



    if(confirm(
    "Are you sure you want to cancel this booking?"
    )){


        let bookings=getBookings();


        bookings.splice(
            e.target.dataset.index,
            1
        );


        saveBookings(bookings);


        renderBookings();


        alert(
        "Booking cancelled successfully."
        );


    }


});





/* =================================================
              ADMIN BOOKING REQUESTS
================================================= */


function renderBookingRequests(){


    const tbody=
    document.getElementById("bookingRequestBody");


    if(!tbody) return;



    const bookings=getBookings();

    const rooms=getRooms();


    tbody.innerHTML="";



    let no=1;



    bookings.forEach((booking,index)=>{


        if(booking.status!=="Pending")
        return;



        const room=
        rooms.find(
        r=>r.room===booking.room
        );



        tbody.innerHTML+=`

        <tr>


        <td>${no++}</td>

        <td>${booking.student}</td>

        <td>${booking.room}</td>

        <td>${room ? room.location:"-"}</td>

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



/* Approve / Reject */


document.addEventListener("click",function(e){


    let bookings=getBookings();

    let rooms=getRooms();



    if(e.target.classList.contains("approve-btn")){


        const index=e.target.dataset.index;


        bookings[index].status="Booked";


        rooms.forEach(room=>{


            if(room.room===bookings[index].room){

                room.status="Booked";

            }


        });



    }



    if(e.target.classList.contains("reject-btn")){


        const index=e.target.dataset.index;


        bookings[index].status="Rejected";



        rooms.forEach(room=>{


            if(room.room===bookings[index].room){

                room.status="Available";

            }


        });


    }



    saveBookings(bookings);

    saveRooms(rooms);


    renderBookingRequests();

    renderStudentRooms();

    renderBookings();


});
# Lab 10 - Implementation Plan

## 1. Project Information

- **Group name:** PowerPuff
- **Project title:** University Room Booking System
- **Repository link:** https://github.com/Hannyyoop/ICT105-PowerPuff-MVP
- **Selected platform/tools:** HTML, CSS, JavaScript, Visual Studio Code, GitHub, and LocalStorage
- **Backend status:** Simulated backend

---

## 2. Prototype Scope for Sprint 1

The main goal of Sprint 1 is to implement the core room booking workflow for students and administrators. The prototype will allow students to view available rooms, search for rooms, submit booking requests, and view their booking status. Administrators will be able to view booking requests, approve or reject requests, and manage room information.

| Feature | Requirement ID | User Story ID | Screen/Module | Sprint 1 Status |
|---|---|---|---|---|
| Homepage / landing screen | FR-01 | US-01 | Homepage | In Progress |
| View available rooms | FR-02 | US-02 | Rooms | In Progress |
| Room search/filter | FR-03 | US-03 | Rooms | In Progress |
| Room booking form | FR-04 | US-04 | Booking Form | In Progress |
| View my bookings | FR-05 | US-05 | My Bookings | In Progress |
| Cancel booking | FR-06 | US-06 | My Bookings | Planned |
| Booking request management | FR-07 | US-07 | Admin / Booking Requests | In Progress |
| Approve or reject booking | FR-08 | US-08 | Admin / Booking Requests | In Progress |
| Room management | FR-09 | US-09 | Admin / Manage Rooms | In Progress |
| Booking status tracking | FR-10 | US-10 | My Bookings / Admin | In Progress |
| Admin dashboard | FR-11 | US-11 | Admin Dashboard | Planned |

---

## 3. Implementation Approach

### Frontend:
The prototype will be developed using HTML, CSS, and JavaScript. HTML will be used to create the structure of each page, CSS will be used for the layout and visual design, and JavaScript will be used to add interactive features and handle user actions.

The main pages/modules include:

- `index.html` - Student/Admin Portal
- `rooms.html` - View and search available rooms
- `booking.html` - Room booking form
- `my-booking.html` - View submitted bookings
- `dashboard.html` - Admin dashboard
- `booking-request.html` - Manage student booking requests
- `admin.html` - Manage room information

### Data source/storage:
The prototype will use the browser `LocalStorage` to simulate a backend database. Room and booking information will be stored as JavaScript objects in LocalStorage.

The main data collections will include:

- `rooms` - Stores room name, capacity, building/location, and availability status.
- `bookings` - Stores student name, room name, building, date, time, purpose, and booking status.

This approach allows the prototype to demonstrate the main booking workflow without developing a real backend.

### Admin/status handling:
Administrators will be able to view submitted booking requests on the `booking-request.html` page.

Each booking request will initially have a **Pending** status. The administrator can:

- Approve a booking request.
- Reject a booking request.
- Update the booking status.

The updated status will be saved in LocalStorage so that the booking status can also be displayed on the student's **My Bookings** page.

### Search/filter approach:
JavaScript will be used to filter available rooms based on the user's search input.

Users will be able to search for rooms by:

- Room name
- Building or location

The search results will be updated dynamically without requiring the page to reload.

### Validation approach:
JavaScript form validation will be used to ensure that users provide the required booking information before submitting a request.

The booking form will check that:

- Student name is provided.
- A room is selected.
- A booking date is selected.
- A booking time is selected.
- A purpose is provided.

The system will display an error message if required information is missing.

### Screenshots/evidence approach:
Screenshots of completed features will be captured and added to the GitHub project documentation as evidence of implementation.

Evidence will include:

- Homepage
- Available rooms page
- Room search function
- Booking form
- My Bookings page
- Admin dashboard
- Booking Requests page
- Approve and reject functions
- Manage Rooms page

GitHub commits and issues will also be used to track the development progress and team contributions.

---

## 4. Member Responsibilities

| Member | Responsibility | Evidence of Contribution |
|---|---|---|
| Nichaphat Leamviset | UX/UI design, documentation, and frontend page layout | GitHub commits, issues, HTML/CSS files, and documentation |
| Swe Zin Win | Technical implementation, JavaScript functionality, and LocalStorage | GitHub commits, issues, JavaScript files, and implementation evidence |
| Htet Myat Noe | Product requirements, validation, testing, and admin workflow | GitHub commits, issues, testing evidence, and project documentation |

---

## 5. Risks or Blockers

| Risk / Blocker | Impact | Planned Solution |
|---|---|---|
| No real backend is available for the prototype. | Data cannot be stored in a real database or accessed by multiple users. | Use LocalStorage to simulate data storage and demonstrate the core workflow. |
| LocalStorage data is limited to the user's browser. | Students and administrators cannot share the same data across different devices. | Clearly document that LocalStorage is only used for prototype demonstration. A real backend can be implemented in a future version. |
| Booking status may not update correctly between pages. | Users may see outdated booking information. | Use consistent LocalStorage keys and ensure that all pages read the latest booking data before rendering. |
| Approve and Reject buttons may not work correctly. | Administrators cannot update booking requests. | Add JavaScript event listeners using booking IDs or indexes and update the booking status in LocalStorage. |
| Room availability may not update after a booking. | Users may be able to request rooms that are already booked. | Add availability checking before submitting a booking and update room status when necessary. |
| Search/filter function may not display the correct results. | Users may have difficulty finding available rooms. | Test the search function using different room names and building names and make the search case-insensitive. |
| Data may be lost if browser LocalStorage is cleared. | Prototype booking and room data may be deleted. | Use sample data for testing and document the limitation of using LocalStorage. |
| Different team members may make changes to the same files. | Git merge conflicts may occur. | Communicate before editing shared files, commit changes regularly, and resolve conflicts carefully before merging. |
| Limited development time during Lab 10. | Some planned features may not be completed. | Prioritize core MVP features such as room viewing, booking submission, booking requests, and admin approval/rejection before optional features. |

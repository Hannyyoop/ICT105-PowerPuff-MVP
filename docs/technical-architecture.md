# Technical Architecture

## Project Title
**University Room Booking System**

---

## 1. Selected Prototype Platform

**Frontend + localStorage**

**Technologies:**
- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Browser Local Storage

---

## 2. Architecture Decision

Our group selected a **frontend-only web application with Local Storage** because it is simple to develop, matches our current programming skills, and is sufficient for demonstrating the core functionality of the Room Booking System. Local Storage allows us to temporarily store room and booking data without requiring a backend server or database.

This approach enables us to build an interactive prototype where users can browse available rooms, search by date and time, create bookings, view their reservations, cancel bookings, and manage room information. It also reduces development complexity while meeting the requirements of the final prototype for this course.

---

## 3. Main Components

| Component | Description | Tool / Technology | Related Requirement |
|------------|-------------|-------------------|---------------------|
| User Interface | Displays the homepage, room list, booking pages, and navigation. | HTML, CSS, JavaScript | FR-01 |
| Data Input Form | Allows users to search rooms, create bookings, and lets staff manage room information. | HTML Forms, JavaScript | FR-03, FR-04, FR-07 |
| Data Storage | Stores room information and booking records locally in the browser. | Local Storage | FR-02, FR-04, FR-05 |
| Record List | Displays available rooms and users' booking records. | HTML Tables, JavaScript | FR-02, FR-05 |
| Detail View | Shows booking details before confirmation. | HTML, CSS, JavaScript | FR-04 |
| Admin Function | Allows staff to add, edit, and delete room information. | JavaScript, Local Storage | FR-07 |
| Dashboard / Summary | Displays a summary of rooms and total bookings. | JavaScript | FR-08 |

---

## 4. What Will Be Fully Implemented?

The final prototype will include:

- Homepage
- View Available Rooms
- Search Rooms by Date and Time
- Book a Room
- View My Bookings
- Cancel Booking
- Manage Rooms (Add, Edit, Delete)
- Dashboard Summary

---

## 5. What Will Be Simulated?

The following features will be simulated because there is no backend server or database:

- User authentication and login (users are assumed to already be logged in)
- Multi-user booking synchronization
- Persistent database storage
- Real-time room availability across different devices
- Booking confirmation notifications (displayed as on-screen messages only)

---

## 6. Final Prototype Risk

The biggest technical risk is that **Local Storage only stores data on the user's own browser**, meaning bookings and room updates cannot be shared across different devices or users.

To reduce this risk, the group will focus on demonstrating the complete booking workflow within a single browser session. The prototype will clearly showcase the intended functionality and user experience, while acknowledging that a backend database would be required for a real-world deployment.

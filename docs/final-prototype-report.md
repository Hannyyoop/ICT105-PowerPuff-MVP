# Final Prototype Report

## 1. **University Room Booking System**


---

## 2. Group Members and Roles

| Name | Role | Main Contribution | GitHub Evidence |
|---|---|---|---|
| Nichaphat Leamviset | UX/UI Lead, Documentation Lead | Designed the user interface, created prototype pages, prepared project documentation, reports, and GitHub repository. | HTML/CSS files, documentation commits, README updates |
| Swe Zin Win | Technical Lead | Implemented JavaScript functionality, LocalStorage integration, booking workflow, search/filter, and admin features. | `script.js`, implementation commits |
| Htet Myat Noe | Product Lead, Validation Lead | Conducted user validation, refined requirements, tested the prototype, and reviewed functionality. | Validation documents, testing reports, GitHub commits |

---

## 3. Problem Background

University students often experience difficulties when booking campus rooms for group study, project meetings, presentations, or other academic activities. The existing process is largely manual, requiring students to visit an office, complete paper forms, or wait for staff assistance. This process is time-consuming, inconvenient, and makes it difficult to quickly check room availability.

During customer discovery and validation, students expressed the need for a more convenient digital solution that allows them to search available rooms, submit booking requests, and track the status of their bookings.

---

## 4. Target Users

The primary users of the system are **university students** who need to reserve rooms for academic activities.

The system also supports **university administrators**, who are responsible for reviewing booking requests, managing room availability, and maintaining room information.

The prototype aims to simplify communication between students and administrators while making the booking process more efficient.

---

## 5. Evidence Summary

Customer discovery interviews and validation activities indicated that students wanted a simpler and more transparent room booking process.

The collected feedback showed that users preferred a system that could:

- Display available rooms.
- Allow online booking requests.
- Show booking status updates.
- Reduce the need for manual paperwork.

Prototype testing also showed that users could easily understand the booking workflow and navigate between pages.

---

## 6. Final Prototype Overview

The University Room Booking System is a frontend prototype developed using HTML, CSS, JavaScript, and LocalStorage.

The prototype allows students to:

- View available rooms.
- Search rooms by room name or building.
- Submit booking requests.
- View submitted bookings.
- Track booking status.

Administrators can:

- View booking requests.
- Approve or reject booking requests.
- Manage room information.
- View booking statistics through the admin dashboard.

LocalStorage is used to simulate backend data storage for demonstration purposes.

---

## 7. Requirement Traceability Summary

| Requirement ID | Implemented Feature/Screen | User Story ID | Evidence Source | Status |
|---|---|---|---|---|
| FR-01 | Homepage | US-01 | `index.html` | Completed |
| FR-02 | View Available Rooms | US-02 | `rooms.html` | Completed |
| FR-03 | Search Rooms | US-03 | `rooms.html`, `script.js` | Completed |
| FR-04 | Submit Booking Request | US-04 | `booking.html`, `script.js` | Completed |
| FR-05 | View My Bookings | US-05 | `my-booking.html` | Completed |
| FR-06 | Cancel Booking | US-06 | `my-booking.html`, `script.js` | Completed |
| FR-07 | Booking Request Management | US-07 | `booking-request.html` | Completed |
| FR-08 | Approve / Reject Booking | US-08 | `booking-request.html`, `script.js` | Completed |
| FR-09 | Manage Rooms | US-09 | `admin.html` | Completed |
| FR-10 | Booking Status Tracking | US-10 | `my-booking.html` | Completed |
| FR-11 | Admin Dashboard | US-11 | `dashboard.html` | Completed |

---

## 8. Data Handling

The prototype collects only the information required for the room booking process.

The collected data includes:

- Student name
- Room name
- Building
- Booking date
- Booking time
- Purpose of booking
- Booking status

The prototype stores room and booking information using browser LocalStorage to simulate a backend database.

Users can:

- View room information.
- Search available rooms.
- Submit booking requests.
- View booking history.

Administrators can:

- Update booking status.
- Add or manage rooms.
- Review booking requests.

The prototype does not collect unnecessary sensitive information such as passwords, phone numbers, home addresses, financial information, or identification numbers.

---

## 9. Validation and User Testing Results

User testing focused on the main booking workflow.

Participants successfully completed tasks such as:

- Viewing available rooms.
- Searching for rooms.
- Submitting booking requests.
- Viewing booking status.
- Navigating the admin interface.

Testing identified several improvements, including:

- Better booking confirmation messages.
- Improved form validation.
- More responsive table layouts.
- Enhanced synchronization between student and administrator views.

These improvements were incorporated into the final prototype where possible.

---

## 10. Startup/Product Metrics

The prototype includes several metrics to help evaluate system activity and usability.

Examples include:

- Total Booking Requests
- Pending Booking Requests
- Approved Bookings
- Rejected Bookings
- Available Rooms
- Booking Approval Rate

These metrics help administrators monitor booking activity and evaluate room usage.

---

## 11. Business Value and Venture Direction

The University Room Booking System creates value by simplifying the room reservation process for students and administrators.

The system:

- Reduces time spent on manual booking procedures.
- Improves visibility of room availability.
- Provides a centralized booking management process.
- Makes booking status transparent.

In the future, the prototype could be developed into a full web application using a backend database, user authentication, email notifications, and integration with university information systems.

---

## 12. Limitations and Future Improvements

Although the prototype demonstrates the complete booking workflow, several limitations remain.

Current limitations include:

- LocalStorage is used instead of a real shared database.
- Booking data is limited to a single browser.
- No user authentication or login system.
- No real-time synchronization between different users.
- No email or notification functionality.

Future improvements include:

- Implement a real backend database (e.g., Laravel, Firebase, or MySQL).
- Add secure user authentication.
- Enable real-time booking synchronization across multiple devices.
- Integrate email notifications for booking updates.
- Improve mobile responsiveness and accessibility.
- Add booking conflict detection and calendar integration.
- Generate booking reports and analytics for administrators.

Overall, the prototype successfully demonstrates the core functionality of a University Room Booking System and provides a strong foundation for future development into a production-ready application.

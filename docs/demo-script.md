# Demo Script

## Demo Objective

The purpose of the demo is to demonstrate how the University Room Booking System provides a simpler and more convenient way for students to find available university rooms, submit booking requests, and track their booking status.

The demo will also show how administrators can review booking requests, approve or reject requests, manage room information, and monitor booking activity through the admin dashboard.

The demo should prove that the prototype addresses the identified problem of an inefficient manual room booking process and provides a centralized digital workflow for students and administrators.

## Presenter Roles

| Member | Role in Demo | Part Presented |
|---|---|---|
| Nichaphat Leamviset | UX/UI and Documentation Lead | Introduce the project, problem, target users, homepage, and student user journey |
| Swe Zin Win | Technical Lead | Demonstrate room search, booking submission, LocalStorage, and booking status functionality |
| Htet Myat Noe | Product and Validation Lead | Demonstrate admin functions, booking approval/rejection, dashboard, and summarize validation results |

## Demo Flow

| Step | Screen / Feature | What Presenter Says | Requirement ID | Expected User Value |
|---|---|---|---|---|
| 1 | Landing / Homepage | "Our project is the University Room Booking System. It is designed to help university students find and request rooms more easily instead of relying on a manual booking process. The system also provides administrators with tools to manage booking requests and rooms." | FR-01 | Users immediately understand the purpose of the system and how it can help them. |
| 2 | Main User Pathway | "From the homepage, students can navigate to the Rooms page to view available rooms. They can search for a suitable room and then continue to the booking process." | FR-02 | Students can easily understand and follow the main booking workflow. |
| 3 | Booking Form | "After selecting a room, the student can submit a booking request by entering their name, booking date, time, and purpose. The system checks that the required information is provided before submitting the request. After submission, the booking is stored with a Pending status." | FR-03, FR-10, FR-11 | Students can submit a room request easily and receive clear feedback about their submission. |
| 4 | Room and Booking List | "Students can view available rooms and search by room name or building. They can also open My Bookings to see the booking requests they have submitted." | FR-05, FR-06 | Students can quickly find suitable rooms and keep track of their booking requests. |
| 5 | Booking Status / Admin | "On the administrator side, booking requests are displayed in a table. The administrator can review each request and approve or reject it. The booking status is then updated so that the student can see the result of their request." | FR-08, FR-09 | Administrators can manage requests efficiently, while students have better visibility of their booking status. |
| 6 | Admin Dashboard / Metrics | "The admin dashboard provides an overview of the system, including booking requests, pending requests, approved bookings, rejected bookings, and available rooms. These metrics help administrators understand current booking activity." | FR-12 | Administrators can quickly understand the current state of rooms and booking activity. |
| 7 | Closing | "Overall, the University Room Booking System provides a centralized way for students to find rooms, submit booking requests, and track their status. It also helps administrators manage requests and room information more efficiently. In future development, the prototype could be connected to a real backend and database to support multiple users and shared booking data." | FR-16 | Users understand the overall value of the system and the potential for future development. |

## Closing Statement

The University Room Booking System aims to make the room booking process simpler, more convenient, and more transparent for university students. Instead of relying on a manual process, students can view available rooms, search for suitable spaces, submit booking requests, and track their booking status through one platform.

For administrators, the system provides a centralized way to review booking requests, approve or reject requests, manage room information, and monitor booking activity.

Although the current prototype uses LocalStorage as simulated storage and does not have a real backend, it demonstrates the core booking workflow and shows how the system could be developed into a full room booking platform in the future.

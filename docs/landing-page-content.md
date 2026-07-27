# Landing Page Content

## Project Title

**University Room Booking System**

## Target User

The landing page is designed for **university students** who need to find and book available rooms for activities such as group study, project meetings, presentations, and other academic purposes.

The system also supports **university administrators** who manage room availability and review student booking requests.

## Headline

**Find and Book University Rooms Easily.**

## Subheadline

Our University Room Booking System helps students find available rooms, submit booking requests, and track their booking status in one convenient place. Administrators can review booking requests and manage room availability through the admin dashboard.

## Problem Statement

Students currently face difficulties when trying to find and book university rooms. The existing booking process may require students to visit an office or complete a manual booking process, which can be time-consuming and inconvenient. This can also make it difficult for students to quickly check room availability and track the status of their booking requests.

Based on the team's customer discovery and validation activities, students need a more convenient way to find available rooms and submit booking requests. The prototype addresses this problem by providing a centralized digital interface for room searching and booking.

## Solution Description

The University Room Booking System provides a simple digital platform for students to:

- View available university rooms.
- Search for rooms by room name or building/location.
- Submit room booking requests.
- View their submitted bookings.
- Track booking status such as Pending, Approved, or Rejected.

Administrators can use the system to:

- View student booking requests.
- Approve or reject booking requests.
- Manage room information and availability.
- Monitor booking activity through the admin dashboard.

## Key Features

| Feature | Requirement ID | User Value | Prototype Screen/Module |
|---|---|---|---|
| View Available Rooms | FR-02 | Students can quickly see rooms that are available for booking. | `rooms.html` |
| Search Rooms | FR-03 | Students can find rooms more easily by searching room names or buildings. | `rooms.html` |
| Submit Booking Request | FR-04 | Students can request a room without relying on a manual booking process. | `booking.html` |
| View and Track Bookings | FR-05 / FR-10 | Students can view their bookings and check whether requests are Pending, Approved, or Rejected. | `my-booking.html` |
| Admin Booking Management | FR-07 / FR-08 | Administrators can review, approve, or reject student booking requests. | `booking-request.html` |
| Room Management | FR-09 | Administrators can add and manage university room information. | `rooms-management.html` |

## Benefits

From the student's perspective, the system provides:

- **Convenience:** Students can view and request rooms through one platform.
- **Time Saving:** Students do not need to rely on a manual process to check room availability.
- **Easy Room Search:** Students can search for rooms based on room name or building/location.
- **Booking Transparency:** Students can track the status of their booking requests.
- **Better Organization:** Booking information is displayed in a clear and structured format.

From the administrator's perspective, the system provides:

- **Centralized Management:** Booking requests can be viewed in one place.
- **Faster Review:** Administrators can easily approve or reject requests.
- **Better Room Management:** Room information and availability can be managed digitally.
- **Improved Visibility:** The admin dashboard provides an overview of room and booking activity.

## Call-to-Action

**Try the Demo**

Explore available rooms, submit a test booking request, and experience how the University Room Booking System simplifies the room booking process.

Additional actions:

- **View Available Rooms**
- **Submit a Test Booking**
- **View My Bookings**
- **View Admin Dashboard**
- **Give Feedback**

## Responsible Data Message

The prototype follows a data minimization approach and only collects information that is necessary for the room booking process.

The booking form may collect basic information such as:

- Student name
- Room name
- Building
- Booking date
- Booking time
- Purpose of booking

The prototype does **not** collect unnecessary sensitive information such as passwords, phone numbers, home addresses, identification numbers, financial information, or biometric data.

The collected booking information is used only to demonstrate the room booking and administration workflow. Student names and booking details are used to identify and manage booking requests, while administrators can view booking requests for management purposes.

The prototype uses **LocalStorage as simulated data storage** and does not use a real backend or shared database. Therefore, data stored in the prototype is limited to the browser used for testing and should not be treated as a production system.

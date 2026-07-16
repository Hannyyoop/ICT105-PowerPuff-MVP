# Lab 04 - User Stories and Acceptance Criteria

## User Story Format

As a student, I want to book a study room, so that I can reserve a quiet place to study without wasting time searching for an available room.
## User Stories
| Story ID | Role | User Story | Related Requirement | Priority | Acceptance Criteria | Demo Evidence | 
|---|---|---|---|---|---|---|
| US-01 | Student | As a student, I want to view available study rooms, so that I can quickly find an available room. | FR-01 | Must | Given I open the system, when I select a date and time, then the system displays all available study rooms. | Screenshot of room availability page |
| US-02 | Student | As a student, I want to book a study room, so that I can reserve it before arriving at the library. | FR-02 | Must | Given a room is available, when I submit a booking request, then the system confirms my reservation. | Screenshot of booking confirmation | 
| US-03 | Student | As a student, I want to view my booking status, so that I know whether my booking is confirmed. | FR-03 | Must | Given I have made a booking, when I open My Bookings, then the booking status is displayed. | Screenshot of My Bookings page | 
| US-04 | Student | As a student, I want to cancel my booking, so that other students can use the room if I no longer need it. | FR-04 | Should | Given I have an active booking, when I click Cancel, then the booking is removed and the room becomes available. | Screenshot of cancellation page | 
| US-05 | Student | As a student, I want to search for study rooms by date, time, and capacity, so that I can find the most suitable room for my study session. | FR-05 | Should | Given I enter search criteria, when I click Search, then the system displays matching study rooms. | Screenshot of search results |

## Acceptance Criteria Checklist

A good acceptance criterion should be:

- Testable
- Observable in the final prototype
- Connected to a requirement
- Connected to user evidenc
- Not too vague

## Rejected / Future User Stories

| Story ID | Reason for Postponing | Future Condition |
|----------|-----------------------|------------------|
| US-07 | QR code check-in is not required for the MVP. | Implement after the booking system is completed. |
| US-08 | Booking extension feature requires additional booking management logic. | Add in Version 2. |
| US-09 | Email or push notifications are outside the MVP scope. | Implement after user account features are completed. |
| US-10 | Integration with the university timetable requires external system access. | Implement when API access is available. |



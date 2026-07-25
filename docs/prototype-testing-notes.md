# Prototype Testing Notes

## Test Environment

- **Prototype link or folder:** (https://github.com/Hannyyoop/ICT105-PowerPuff-MVP/blob/main/prototype/index.html)
- **Browser/device used:** Google Chrome on Windows laptop/desktop
- **Tester role:** Student user and Administrator
- **Test date:** 25 July 2026

## Main Test Cases

| Test ID | User Flow / Feature | Steps to Test | Expected Result | Actual Result | Status | Issue Found | Fix / Next Action |
|---|---|---|---|---|---|---|---|
| T-01 | Open homepage | Open `index.html` in the browser. | Homepage displays the Room Booking System title, navigation, main content, and action to view rooms. | Homepage loads correctly and navigation links are visible. | Pass | No major issue found. | Continue checking responsive layout on different screen sizes. |
| T-02 | Submit booking request | Open `booking.html`, enter the required booking information, and submit the form. | Booking request is saved in LocalStorage and appears in the user's booking list with a Pending status. | Booking form accepts the entered information and submits the request. | In Progress | Booking data and confirmation message require further testing. | Verify LocalStorage data and add a clear confirmation message after successful submission. |
| T-03 | View booking and room list | Open `rooms.html` and `my-booking.html`. | Available rooms and submitted bookings are displayed in their respective pages. | Room cards and booking table are displayed correctly using sample data. | Pass | Dynamic data display requires further testing. | Ensure newly added rooms and bookings are displayed automatically. |
| T-04 | Search/filter rooms | Enter a room name or building/location into the search field. | Only rooms matching the search keyword are displayed. | Search function filters rooms based on the entered keyword. | In Progress | Search needs testing with different keywords and capitalization. | Make search case-insensitive and test room name and building searches. |
| T-05 | View room details | Select a room from the available rooms page and open the booking option. | The selected room's information is clearly displayed before making a booking. | Room information and booking option are visible. | Pass | Selected room data may require further integration with the booking form. | Ensure the correct room information is passed to the booking form. |
| T-06 | Admin status update | Open `booking-request.html` as an administrator and select Approve or Reject. | Booking status changes from Pending to Approved or Rejected and is reflected in the user's booking list. | Admin booking request table and status options are available. | In Progress | Approve and Reject functions require final testing and LocalStorage integration. | Connect the buttons to booking data and update the status across the prototype. |

## Summary of Issues

The following issues were identified during prototype testing:

1. **Booking submission and LocalStorage integration**
   - Booking data needs to be consistently saved and retrieved from LocalStorage.
   - The booking status should initially be set to `Pending`.

2. **Booking confirmation feedback**
   - A clear confirmation message should be displayed after a user successfully submits a booking request.

3. **Search and filter testing**
   - The room search function needs to be tested with different room names and building/location keywords.
   - Search should work regardless of uppercase or lowercase letters.

4. **Admin Approve and Reject functions**
   - The Approve and Reject buttons need to correctly update the booking status in LocalStorage.
   - The updated status should also appear on the user's `my-booking.html` page.

5. **Room management**
   - Newly added rooms should appear on both the admin room management page and the student's available rooms page.

6. **Dashboard metrics**
   - The admin dashboard should display dynamic statistics based on the current room and booking data stored in LocalStorage.


## Improvements Completed During Lab 11

| Improvement | Description | GitHub Commit Reference |
|---|---|---|
| Booking request table | Added `booking-request.html` for administrators to view student booking requests. | `[Add commit hash]` |
| Admin booking actions | Added Approve and Reject buttons for managing booking requests. | `[Add commit hash]` |
| Booking status display | Added Pending, Approved, and Rejected status labels to booking records. | `[Add commit hash]` |
| Room search | Added room search functionality using room name and building/location. | `[Add commit hash]` |
| LocalStorage integration | Improved storage and retrieval of room and booking information using LocalStorage. | `[Add commit hash]` |
| Booking confirmation | Added feedback after a student submits a booking request. | `[Add commit hash]` |


## Testing Summary

The prototype successfully demonstrates the main room booking workflow, including viewing rooms, searching for rooms, submitting booking requests, viewing bookings, and managing requests through an administrator interface.

The main remaining work is to fully connect the booking workflow with LocalStorage, ensure that administrator status changes are reflected on the student's booking page, complete dynamic dashboard metrics, and perform final testing across different screen sizes and browsers.

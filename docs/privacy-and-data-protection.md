# Privacy and Data Protection

## Data Collection Summary

| Data Field | Why It Is Needed | Personal Data? | Sensitive Data? | Keep / Remove / Replace | Notes |
|------------|------------------|----------------|-----------------|-------------------------|-------|
| Student Name | Identify who made the booking request | Yes | No | Keep | Used by the administrator to identify the requester. |
| Room Name | Identify the requested room | No | No | Keep | Required for booking management. |
| Building | Identify the room location | No | No | Keep | Helps users and administrators locate the room. |
| Booking Date | Reserve the requested date | No | No | Keep | Required to prevent scheduling conflicts. |
| Booking Time | Reserve the requested time slot | No | No | Keep | Required to avoid overlapping bookings. |
| Purpose of Booking | Explain why the room is being used | No | No | Keep | Helps administrators review booking requests. |
| Booking Status | Show whether the request is Pending, Approved, or Rejected | No | No | Keep | Updated by the administrator. |

## Privacy Rule for Prototype

The prototype only collects the minimum information required to process a room booking request. The collected data includes the student's name, room name, building, booking date, booking time, and booking purpose.

Students can only view and manage their own booking requests, while administrators can view all booking requests and update their status (Pending, Approved, or Rejected).

The prototype does not collect sensitive personal information such as passwords, phone numbers, home addresses, identification numbers, financial information, or biometric data. Only the information necessary for room booking is stored.

## Data Minimization Decision

After the privacy review, the following decisions were made:

- Removed student email because it is not required for this prototype.
- Removed phone number because it is unnecessary for room bookings.
- Removed home address because it is unrelated to the booking process.
- Removed date of birth because it is unnecessary.
- Do not collect passwords or other sensitive personal information.
- Only collect information directly related to creating and managing room bookings.

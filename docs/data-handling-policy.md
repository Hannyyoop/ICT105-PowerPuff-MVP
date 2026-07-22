# Data Handling Policy

## Data Collection

The prototype collects only the information needed to make and manage study room bookings. This includes:
- Student name
- Student ID (or masked ID)
- University email (if required)
- Room name
- Booking date
- Start time
- End time
- Purpose of booking
- Booking status

---

## Data Storage

The prototype stores or simulates booking data using:
- Google Sheets (for the prototype database)
- Sample dataset for testing and demonstration

---

## Data Access

- Students can view and manage only their own bookings.
- Library staff can view, approve, reject, update, or cancel bookings.
- System administrators can manage all booking records.

---

## Data Minimization

The prototype does not collect unnecessary personal information.

The following fields are removed or replaced:
- Full student ID → Replaced with a masked ID or booking reference
- Phone number → Not collected
- Home address → Not collected
- Financial information → Not collected
- Passwords → Not stored in the prototype

---

## Responsible Data Rule

The prototype collects only the minimum information required for study room booking. It avoids collecting sensitive personal data and uses sample or masked data whenever possible during testing. Personal information is visible only to authorized users, such as library staff, and is not shared publicly.

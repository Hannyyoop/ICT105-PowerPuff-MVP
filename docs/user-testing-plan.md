# User Testing Plan

## 1. Testing Objective
What do we want to learn before Lab 14?

- Validate whether students can seamlessly discover available rooms, select time slots, and submit booking requests.
- Test the full admin lifecycle: adding new rooms, reviewing incoming student requests, and setting status states (**Available**, **Pending**, **Booked** / **Approved**, **Rejected**).
- Confirm that room availability dynamically updates so students only see rooms currently set as **"Available"**.
- Evaluate multilingual clarity (Thai/English) for international students and measure overall task completion times and usability friction points.

---

## 2. Test User Profile

| User Type | Number of Testers | Why This User Type Matters |
| --- | --- | --- |
| **Target User (Thai Students)** | 3 | Primary domestic users transitioning from paper-based office forms to an online request flow. |
| **Target User (International Students)** | 2 | Evaluates English language accessibility, form clarity, and navigation ease. |
| **Admin / Manager Role** | 2 | Campus staff responsible for adding rooms, toggling availability states, and processing student requests. |

---

## 3. Testing Tasks

| Task ID | User Task | Related Requirement | Success Criteria | Observation Focus |
| --- | --- | --- | --- | --- |
| **T01** | **Admin: Add & Manage Rooms**<br>Admin adds a new study room and updates its room status to **Available**. | FR-09 | Admin successfully adds room details and sets its status to "Available". | Ease of inputting room capacity/amenities; clarity of status toggles (**Available** / **Pending** / **Booked**). |
| **T02** | **Student: Discover Available Rooms**<br>Student opens room catalog and verifies only **Available** rooms are visible. | FR-01, FR-02, FR-06 | Student sees only available study rooms and filters by time slot or capacity. | Search/filter responsiveness; clarity of availability status indicators. |
| **T03** | **Student: Submit Reservation**<br>Student chooses an available room and submits a booking request. | FR-03, FR-04 | Booking request is submitted; status displays as **Pending Approval**. | Field label clarity, date/time slot selection friction, and confirmation feedback. |
| **T04** | **Admin: Approve or Reject Request**<br>Admin checks room availability, reviews the pending request, and approves or rejects it. | FR-08, FR-09 | Admin approves/rejects request; room status updates to **Booked** (if approved) or returns to **Available** (if rejected). | Speed of review process; clarity of action buttons (**Approve** / **Reject**); status sync across interfaces. |
| **T05** | **Student: Track Request & System Overview**<br>Student checks reservation status; Admin views overall usage summary. | FR-05, FR-07, FR-12 | Student confirms their booking status; Admin reviews metrics on the dashboard. | Status label clarity (**Pending** → **Approved/Booked**); dashboard KPI cards usefulness. |

---

## 4. Testing Procedure

1. **Introduction:** Welcome the participant, explain the testing purpose (evaluating prototype workflow, not testing the user), and obtain consent.
2. **Task Execution:** Present the tasks sequentially (Admin setup → Student booking → Admin approval → Student confirmation). Ask participants to think out loud.
3. **Facilitator Rule:** Do not intervene or give hints unless the participant remains completely stuck for over 1 minute.
4. **Data Recording:** Log task completion result (Success / Assisted / Failed), completion time (in seconds), verbal feedback, and visual friction points.
5. **Debriefing:** Collect post-test feedback, including Ease of Use ratings (1–5) and feature improvement suggestions.

---

## 5. Ethical Reminder

* Do not collect unnecessary personal details (e.g., real passwords, phone numbers, or official student IDs).
* Explicitly inform participants that all collected feedback and interaction data are strictly for academic learning, prototype refinement, and course evaluation under ICT105.

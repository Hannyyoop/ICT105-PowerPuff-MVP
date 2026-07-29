# User Testing Results

## 1. Testing Summary
- **Date:** July 28, 2026
- **Number of testers:** 7 testers (3 Domestic/Thai Students, 2 International Students, 2 Admin/Staff Roles)
- **Prototype link:** `/prototype/index.html` (Local GitHub Repository Deployment)
- **Testing location/platform:** Faculty Library Study Area & Online Discord/Zoom Walkthrough

---

## 2. Task Completion Summary

| Task ID | Task | Completed? | Main Issue Found | Evidence / Comment |
| --- | --- | --- | --- | --- |
| **T01** | **Admin: Add & Manage Rooms**<br>Admin adds a room and toggles status to **Available**. | **Yes** | Minor confusion over status dropdown placement. | Both admin testers successfully added rooms. Suggested making status toggles (**Available** / **Pending** / **Booked**) more prominent. |
| **T02** | **Student: Discover Available Rooms**<br>Student views catalog and checks available spaces. | **Yes** | None. | All 5 student testers easily identified available rooms. Filter by date/time worked smoothly. |
| **T03** | **Student: Submit Reservation**<br>Student submits a booking request for an available room. | **Yes** | Purpose field required slightly longer input time. | All students completed the booking form; submission feedback clearly showed status as **Pending Approval**. |
| **T04** | **Admin: Approve or Reject Request**<br>Admin reviews pending booking and sets status to **Booked** or **Rejected**. | **Partial** | Button label contrast for "Approve/Reject" was low on mobile screens. | Admins successfully updated room statuses, but noted that action buttons needed clearer color coding (Green for Approve, Red for Reject). |
| **T05** | **Student: Track Request & System Overview**<br>Student checks status in "My Bookings"; Admin reviews dashboard. | **Yes** | International students requested explicit status tag translations. | Students successfully verified when their status changed from **Pending** to **Booked**. |

---

## 3. Common Usability Issues

| Issue ID | Issue Description | Severity | Related Requirement | Proposed Fix |
| --- | --- | --- | --- | --- |
| **UI-01** | Admin action buttons (**Approve** / **Reject**) lacked high visual contrast on mobile resolutions. | **Important** | FR-09 | Add explicit badge color coding: solid Green (`#10b981`) for Approve and Red (`#ef4444`) for Reject. |
| **UI-02** | International students noted that status terms (e.g., "Pending Approval") were clear in English, but needed explicit tooltips explaining what step comes next. | **Useful** | FR-08, FR-10 | Add a simple micro-copy helper text under the status badge: *"Awaiting library staff review"*. |
| **UI-03** | When an admin sets a room status directly to **Booked** or **Pending**, students couldn't tell how long the room would remain unavailable. | **Useful** | FR-02, FR-06 | Display time-slot duration alongside the room status tag (e.g., *"Booked until 14:00"*). |

---

## 4. User Feedback Summary

* **What Users Liked:**
  * **24/7 Access & English UI:** International students praised the full English translation, citing it as a huge improvement over the current paper-based Thai forms.
  * **Real-Time Visibility:** Students loved that only rooms marked **"Available"** were shown for booking, preventing wasted trips to occupied spaces.
  * **Admin Control:** Staff liked having direct control over room availability states (**Available**, **Pending**, **Booked**) and quick approve/reject action buttons.

* **What Users Disliked / Misunderstood:**
  * Some students expected instant automated confirmation and were initially confused why the status said **Pending Approval** until admins explained staff must approve requests first.
  * Mobile layout for the admin management table required horizontal scrolling.

* **Suggestions:**
  * Add automated status notifications or a clear visual indicator when an admin approves or rejects a request.
  * Include a quick filter toggle for "Available Today" on the main room catalog screen.

---

## 5. Evidence-Based Decision

* **Chosen Decision:** **Needs minor revision**

### Explanation of Decision:
The core end-to-end workflow—**Admin adds/manages rooms → Student discovers available rooms → Student submits request → Admin approves/rejects → Room status updates dynamically**—was successfully completed by **85%+** of testers without critical failure. 

However, before the final Lab 14 presentation, minor UI revisions are needed to sharpen button color contrast in the Admin view, add descriptive helper text for status tags, and polish responsive table layouts on mobile screens.

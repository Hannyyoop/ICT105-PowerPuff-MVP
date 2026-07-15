# Lab 08 - MVP Decision

## 1. Decision

- [ ] Continue with the current MVP direction
- [x] Continue with minor revisions
- [ ] Revise major workflow or feature
- [ ] Collect more evidence before implementation
- [ ] Pivot or change the solution direction

---

## 2. Evidence Supporting the Decision

The validation results indicate that most participants were able to complete the core tasks, including viewing available rooms, searching for rooms, booking a room, managing room information, and viewing their bookings without assistance. Most testers rated the prototype between **4 and 5 out of 5** for usability and clarity.

The main issues identified during testing were:
- Some users wanted clearer instructions for the booking purpose field.
- Room availability could be highlighted more clearly.
- Users suggested adding more search and filter options.
- Dashboard statistics could include additional information in future versions.

These findings suggest that the current MVP successfully demonstrates the core room booking workflow. Therefore, the team will continue with the current direction while making minor usability improvements before further development.

---

## 3. Requirements to Keep

| Requirement ID | Reason |
|---|---|
| FR-01 | Homepage clearly introduces the system and guides users to the appropriate portal. |
| FR-02 | Users can successfully view available rooms. |
| FR-03 | Room search feature is easy to understand and use. |
| FR-04 | Room booking workflow was completed successfully by most testers. |
| FR-05 | Users can easily view their booking history. |
| FR-06 | Booking cancellation is simple and understandable. |
| FR-07 | Staff can manage room information effectively. |
| FR-08 | Dashboard provides useful booking and room summaries. |

---

## 4. Requirements to Improve

| Requirement ID | Problem Found | Improvement Needed |
|---|---|---|
| FR-03 | Search function is basic. | Add more search filters such as building, capacity, and availability. |
| FR-04 | Some users were unsure about the booking purpose field. | Add clearer placeholder text and validation messages. |
| FR-05 | Booking records display limited information. | Show additional booking details such as booking status and room location. |
| FR-07 | Room status updates are only simulated. | Improve room management using Local Storage to synchronize changes across pages. |
| FR-08 | Dashboard statistics are static. | Automatically calculate totals from Local Storage data. |

---

## 5. Prototype Changes Before Next Lab

- Improve the room search feature with better filtering.
- Add clearer instructions and validation for the booking form.
- Store room and booking information using Local Storage.
- Automatically update room availability after booking.
- Synchronize room status changes between the Admin and Student pages.
- Improve the dashboard to display dynamic booking statistics.
- Refine the user interface based on tester feedback.

---

## 6. GitHub Issues Created

| Issue Title | Assigned Member | Requirement ID |
|---|---|---|
| Issue 1: Collect or clean validation data for own group case | Htet Myat Noe | FR-01 – FR-08 |
| Issue 2: Complete validation-results.xlsx / validation-results.csv | Htet Myat Noe | FR-01 – FR-08 |
| Issue 3: Write customer-validation-summary.md | Nichaphat | FR-01 – FR-08 |
| Issue 4: Write analytics-insights.md | Nichaphat | FR-08 |
| Issue 5: Write mvp-decision.md | Swe Zin Win | FR-01 – FR-08 |
| Issue 6: Improve prototype feature based on validation evidence | Swe Zin Win | FR-03, FR-04, FR-07, FR-08 |
| Issue 7: Update README and weekly logbook for Lab 08 | Nichaphat | Project Documentation |

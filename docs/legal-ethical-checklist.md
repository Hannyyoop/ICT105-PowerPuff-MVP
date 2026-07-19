# Legal and Ethical Checklist

## Project Title
**University Room Booking System**

## Ethical Review

| Check Item | Yes/No | Evidence / Notes | Mitigation Action | Owner | GitHub Issue/Commit |
|------------|--------|------------------|-------------------|-------|---------------------|
| Users are informed about the purpose of the prototype. | Yes | The homepage explains that the system is for booking university rooms. | Display a short system description before booking. | Product Lead | N/A |
| The prototype avoids misleading claims. | Yes | The prototype only demonstrates booking functionality and does not promise automatic room approval. | Clearly label booking requests as "Pending" until approved by an admin. | Documentation Lead | N/A |
| The prototype does not collect unnecessary sensitive data. | Yes | Only basic booking information (name, room, date, time, purpose) is collected. No passwords or personal identification numbers are stored. | Continue limiting data collection to essential booking information only. | Technical Lead | N/A |
| Users can understand what happens after submission. | Yes | After submitting a booking, the request appears with a "Pending" status until reviewed by an administrator. | Show confirmation messages and booking status clearly. | UX/UI Lead | N/A |
| Admin or manager actions are clearly separated from user actions. | Yes | Students can only create and view bookings, while admins can approve, reject, and manage bookings. | Keep separate navigation menus and dashboards for students and administrators. | Technical Lead | N/A |
| The prototype avoids unfair or harmful treatment of users. | Yes | All booking requests follow the same approval process regardless of the user. | Ensure consistent approval criteria for every request. | Validation Lead | N/A |

## Summary Decision

- **Safe to continue:** **Yes**
- **Required revision before implementation:**
  - Add a confirmation message after users submit a booking request.
  - Clearly display booking statuses (Pending, Approved, Rejected).
  - Include a brief privacy notice explaining what user data is collected.
  - Ensure only administrators have access to booking management features.

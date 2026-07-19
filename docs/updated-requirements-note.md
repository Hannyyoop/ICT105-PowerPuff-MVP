# Updated Requirements Note

## Purpose
This file is used to document any changes made to the original **system-requirements.md** after the Lab 09 review. All requirement changes must be justified and traceable.

| Requirement ID | Original Requirement | Proposed Update | Reason for Change | Supporting Evidence | GitHub Issue/Commit | Approved by Team? |
|----------------|----------------------|-----------------|-------------------|---------------------|---------------------|-------------------|
| FR-01 | Users can log in to the system. | Login feature removed from the prototype. Users enter their name when making a booking instead. | To simplify the frontend-only prototype and focus on demonstrating the core booking workflow without backend authentication. | Team MVP decision and prototype scope. | N/A | Yes |
| FR-04 | Users can submit a room booking request. | Booking requests are saved with a **Pending** status and require administrator approval. | Better reflects the actual university booking process where requests must be reviewed before confirmation. | User feedback and project requirements. | N/A | Yes |
| FR-07 | Admin can manage rooms. | Expanded to allow administrators to manage rooms **and** approve or reject booking requests. | Booking approval is an essential administrative function for the prototype. | Team discussion and updated admin workflow. | N/A | Yes |

## Rule

Do not silently change system requirements. Every change must be justified, documented, and traceable. Any future updates should be reviewed by the project team before implementation.

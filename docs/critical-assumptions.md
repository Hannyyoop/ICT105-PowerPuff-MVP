# Critical Assumptions

## Instruction
Identify assumptions that could cause your final prototype to fail if they are wrong.

| Assumption ID | Category | Assumption | Related Requirement/User Story | Risk Level | Current Evidence | How to Test |
|---|---|---|---|---|---|---|
| A-01 | User Problem | Students need a faster and easier way to reserve university rooms without visiting the office. | FR-04 / US-04 | High | Lab 03 interviews and user survey | Ask users to complete a room booking task using the prototype and collect feedback. |
| A-02 | Value Proposition | Students prefer an online room booking system over the current paper-based process. | FR-02, FR-04 / US-02, US-04 | High | User survey responses | Compare user satisfaction with the current process and the prototype. |
| A-03 | Usability | Users can easily navigate the Student Portal and complete a booking without assistance. | FR-01, FR-02, FR-04 / US-01, US-04 | Medium | No evidence yet | Conduct usability testing and observe task completion. |
| A-04 | Technical Feasibility | HTML, CSS, JavaScript, and Local Storage are sufficient to demonstrate the core booking workflow without a backend. | FR-04, FR-05, FR-06 | Medium | Prototype design | Test booking creation, viewing, and cancellation using Local Storage. |
| A-05 | Business Logic | Staff can effectively manage room information by adding, editing, deleting rooms, and updating room availability. | FR-07 / US-07 | Medium | Prototype implementation | Ask staff users to complete room management tasks and gather feedback. |
| A-06 | Data Handling | Local Storage can temporarily store room and booking information for demonstration purposes without affecting the prototype experience. | FR-04, FR-05, FR-07 | Low | Prototype implementation | Verify that room and booking data are saved, updated, and displayed correctly across pages. |

## Categories

Use these categories:
- User Problem
- Value Proposition
- Usability
- Technical Feasibility
- Business Logic
- Data Handling

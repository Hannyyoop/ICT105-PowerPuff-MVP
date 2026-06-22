### Repeated Patterns
* **Manual Friction:** Users consistently waste time doing physical, face-to-face administrative steps (filling out paper forms, visiting offices manually).
* **Communication Fragmentation:** Dependence on disconnected methods (asking random staff, sending manual emails, or checking offline schedules) to find real-time campus information.

### Validated Problem Signals
* **Scheduling Conflicts:** Clear evidence of scheduling delays and potential double-bookings due to the lack of a centralized, real-time visibility system.
* **Identity Verification Need:** A confirmed requirement for a secure university email login to ensure only authorized students and organizations can reserve campus resources.

### Weak Evidence
* **Admin Staff Workflow:** While student frustrations are well-documented, there is limited data on how administrative staff currently manage, approve, or reject these requests on the backend.
* **Mobile vs. Desktop Usage:** It is assumed a responsive web app is sufficient, but actual student behavior regarding whether they prefer booking on-the-go (mobile) or in advance (desktop) needs further observation.

### Next Steps
* **Model User Interaction (Lab 3):** Finalize Use Case and Workflow diagrams focusing entirely on the customer journey, distinguishing permissions between regular students and room administrators.
* **Define Backend Logic:** Map out the exact relational logic for the MySQL database to prevent overlapping time slots before moving on to UI prototyping.

### Key Findings
* **The Core Friction:** The current manual, paper-based booking system causes visible scheduling conflicts, long wait times, and a total lack of real-time transparency for students.
* **Feasibility Confirmation:** Evaluating the project against the NUF (New, Useful, Feasible) framework confirms that a web-based Room Booking System has a highly manageable scope, utilizing a standard relational database structure (MySQL) to completely eliminate double-bookings.
* **User-Centric Priority:** Early analysis highlights that the system's success relies heavily on clear role separation (Students vs. Administrators) and secure identity verification via university email.

### Decision for Next Step
* **Proceed to Structural Modeling (Lab 3):** Transition fully into customer-centric requirements gathering. The team will define core user personas and map out Use Case and Workflow/Activity diagrams to solidify system logic before any frontend UI or web page design begins.

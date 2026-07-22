# ICT105-PowerPuff-MVP
<br>

## Project Name <br>

BookUP  <br>

## Course Information <br>
Course Code: ICT105 <br>
Course Name: Fundamental Technology Entrepreneurship <br>
Instructor: Dr. Herison Surbakti <br>
Project Type: 14-Labs Continuous IT Startup MVP Development <br>

## Team Name <br>
PowerPuff

## Team Members and Roles

| Team Member | Role | Responsibilities |
|--------------|------|------------------|
| Nichaphat Leamviset | UX/UI Lead, Documentation Lead | Designs wireframes, user flow, and interface screens. Maintains README, weekly logbook, report files, and final submission package. |
| Swe Zin Win | Technical Lead | Manages prototype development, repository structure, and technical feasibility. |
| Htet Myat Noe | Product Lead, Validation Lead | Defines the problem, target users, value proposition, and project direction. Manages customer discovery, survey/interview evidence, and metric collection. |
 
## Initial Problem Area
Working space/rooms in the campus

## Target Users
University students

## Initial IT Venture Direction
The IT solution direction is a simple University Room Booking Web App. It lets students check room availability and book study spaces and meeting rooms directly from any web browser, simplifying the booking process.

## Technology Possibility
Possible technologies:
- Web application
- Dashboard
  

## Repository Structure
- docs: reports, profiles, idea logs, and weekly logbooks
- prototype: source code or clickable prototype files
- data: survey responses, validation data, and metrics
- finance: financial assumptions and model
- diagrams: user flow and technical architecture diagrams
- screenshots: evidence of prototype and repository progress
- pitch: pitch deck and final demo files
  
## Weekly Progress Log

| Lab | Topic | Deliverables | Status |
|-------|-------|--------------|--------|
| Lab 1 | Lab Setup and Idea Log | Repository, team profile, initial idea log | Completed |
| Lab 2 | Opportunity Scanning | Opportunity scan document, selected project decision document | Completed |
| Lab 3 | Requirements & User Modeling | Use case diagrams, user workflow/activity diagrams, User Requirements Specification (URS) | Completed |
| Lab 4 | MVP Architecture & Flowcharts | Core MVP feature matrix, detailed system flowchart diagram | Completed |
| Lab 5 | UX/UI Design & Wireframing | Low-/mid-fidelity wireframes, interface screen layouts, GitHub repository synchronization | Completed |
| Lab 6 | Lean Feature Prioritization | Feature–requirement mapping, feature–value metrics matrix | Completed |
| Lab 7 | High-Fidelity Prototype & Experiment Design | Clickable high-fidelity walkthrough, MVP experiment script, validation template | Completed |
| Lab 8 | Customer Validation & Analytics | Clean validation dataset, Power BI dashboard report (`.pbix`), dashboard screenshots, analytical insights (`analytics-insights.md`), and final MVP decision (`mvp-decision.md`) | Completed[cite: 1] |
| Lab 9 | Financial Management & Startup Metrics | Startup economics model, burn rate and runway calculations, AARRR framework mapping | Completed[cite: 1] |

## Current Status

During Lab 1, the team set up the project repository and organized the folder structure. We created the team profile and discussed several project ideas before selecting the Room Booking System as the initial direction. The initial idea log was completed, including the problem area, target users, proposed solution, and potential technology options. Basic project documentation and README files were also prepared.

During Lab 2, the team conducted an opportunity scan and evaluated three project ideas: Room Booking System, Cafeteria Queue System, and Campus Navigation App using the NUF (New, Useful, Feasible) framework. After comparison, the Room Booking System was confirmed as the final project due to its high feasibility and practicality. The opportunity discovery table, technology feasibility mapping, and scoring sheet were completed.

During Lab 3, the team shifted focus toward the customer and end-user perspective. Instead of jumpstarting the web interface design, we are strictly concentrating on gathering detailed user requirements and mapping out how the customer interacts with the Room Booking System. We are currently defining the core user personas, analyzing their specific pain points, and translating them into functional requirements. The team is actively developing Use Case diagrams and initial customer workflow/activity diagrams to model the exact steps a user takes to find and book a room.

During Lab 4, the team transitioned from abstract user requirements to concrete solution architecture. We focused strictly on defining our Minimum Viable Product (MVP) feature set to prevent scope creep, ensuring the core application addresses the main user pain points (such as language barriers and lack of real-time availability) effectively.

During Lab 5, the team shifted from logical architecture to visual and interface design. Led by the UX/UI design role, we began translating the MVP feature matrix and user workflows into tangible user interfaces by creating low-to-mid fidelity wireframes. These wireframes map out the essential layouts for the room discovery dashboard, calendar scheduling view, and booking confirmation screens. Concurrently, the team updated and synchronized the GitHub repository, organizing the latest design assets, screenshots, and documentation under their respective directories to keep the project history transparent and up to date.

During Lab 6, the team transitioned from user interface design to backend structural planning by establishing our Feature-Requirement and Feature-Value mapping. We focused on aligning our wireframe layouts with our core functional requirements and user stories to ensure every screen directly solves a real user problem. By evaluating each feature's user and operational value, we successfully prioritized our MVP deliverables and identified areas in our admin workflow that need further refinement.

During Lab 7, the team moved from internal feature mapping to external traction planning, applying Lean Analytics frameworks. We built an interactive high-fidelity prototype that simulates the entire lifecycle of a reservation—from browsing availability and selecting a time slot to completing the booking form and checking the reservation status. Concurrently, we formulated an MVP validation experiment framework to track user interaction, ensuring we gather maximum validated learning with minimum operational effort.

During Lab 8, the team transitioned from high-fidelity prototyping to customer validation and data-driven analysis. We imported our raw user testing feedback into Power BI, creating custom DAX measures to calculate critical performance metrics such as Task Success Rate, Average Ease of Use, Confusion Rate, and Interest Rate[cite: 1]. This allowed us to build an interactive, multi-dimensional validation dashboard equipped with KPI cards, behavioral charts, and demographic slicers to isolate specific user friction points[cite: 1]. Our findings, including a formalized decision on whether our MVP is validated or requires further design revisions, were systematically documented under our `/data/` and `/docs/` directories to anchor our next engineering phases in concrete empirical evidence[cite: 1].

During Lab 9, the team transitioned from product validation data to financial and operational planning by evaluating our startup economics and performance metrics[cite: 1]. We focused on defining actionable metrics rather than vanity counts, mapping our progress to the AARRR funnel framework and Eric Ries's Engines of Growth to focus squarely on customer retention (the sticky engine)[cite: 1]. Concurrently, we established our financial foundation by calculating our burn rate and runway to project a clear path toward cash break-even, ensuring the project remains adequately capitalized[cite: 1].

## Next Step

Moving into Lab 10, the team will transition from baseline financial modeling to implementing targeted analytics frameworks. We will select our One Metric That Matters (OMTM) to isolate the single most critical number driving our startup's current lifecycle stage[cite: 1]. By drawing a concrete line in the sand for our target growth goals and updating our repository with our updated startup finance projections and analytics frameworks, we will ensure that our upcoming engineering pushes are entirely focused on moving a single high-impact metric[cite: 1].

# Lab 10 - MVP Implementation Sprint 1

### Sprint Goal

Our goal in Lab 10 is to begin building the first working version of the Study Room Booking System based on the approved requirements, wireframes, technical architecture, and responsible-design checks.

### Implementation Approach

- Platform/tools: HTML, CSS, JavaScript
- Backend status: Frontend prototype (no backend implemented)
- Data storage/simulation: Sample booking data using JavaScript/CSV
- Prototype link or folder: /prototype/

### Features Implemented in Sprint 1

| Feature | Requirement ID | Status | Evidence |
|---|---|---|---|
| Homepage | FR-01 | Completed | homepage.html, homepage.png |
| Input form | FR-03 | Completed | input-form.html, input-form.png |
| Record list | FR-05 | Completed | record-list.html, record-list.png |
| Search/filter | FR-06 | Completed | Search function demonstration |
| Detail view | FR-07 | Completed | detail-view.html, detail-view.png |
| Status tracking | FR-08 | Completed | Status labels and booking status display |
| Admin view | FR-09 | Completed | admin-view.html, admin-view.png |
| Dashboard | FR-12 | Completed | dashboard.html, dashboard.png |

### Screenshots

- Homepage: <img width="1052" height="687" alt="image" src="https://github.com/user-attachments/assets/29538c73-2d91-41b2-947c-4a46b82c1f1f" />
- Input form: <img width="848" height="853" alt="image" src="https://github.com/user-attachments/assets/411afd5f-0f9f-4b20-99e2-edd3086ca834" />
- Record list: <img width="1431" height="753" alt="image" src="https://github.com/user-attachments/assets/93c3a680-d255-40cb-aaac-679ca092d451" />
- Detail view: <img width="1351" height="567" alt="image" src="https://github.com/user-attachments/assets/d71d93ed-c771-4ff1-810f-ed1fc3aa7824" />
- Admin/status view: <img width="1362" height="766" alt="image" src="https://github.com/user-attachments/assets/f901fba5-a752-4a89-a893-8fdcc588c487" />


### Team Contribution

All group members contributed to the same GitHub repository. Team members worked together to design the interface, develop the homepage, booking form, booking list, search and filter function, detail view, booking status tracking, admin page, dashboard, and project documentation. Each member committed their work to the shared GitHub repository.

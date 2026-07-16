# Lab 08 - Customer Validation Summary

## 1. Project Title
BookUP (University Room Booking Web App)

## 2. Prototype Tested
Describe the MVP experiment or prototype version tested.

- **Prototype version**: High-Fidelity Interactive Walkthrough (Lab 7 Prototype)
- **Prototype link or screenshot location**: `/screenshots/lab08-powerbi-dashboard.png` (Dashboard overview of results)[cite: 1]
- **Main task tested**: Browsing real-time room availability, selecting a specific time-slot, completing the booking reservation form, and verifying the reservation status on a dashboard screen.
- **Related requirements from `system-requirements.md`**: 
  - `FR-01`: View Real-Time Room Availability
  - `FR-02`: Select Time Slot & Book Space
  - `FR-03`: Multi-Language Interface (English/Thai Support)
  - `FR-04`: View Personal Reservation Status

## 3. Test Users
| Test User ID | User Role | Why this user is relevant |
|---|---|---|
| **TU-01** | Thai Student | Needs to find and reserve study spaces quickly during exams without physical office visits. |
| **TU-02** | International Student | Struggles with the current Thai-only paper forms and requires a multi-language booking flow. |
| **TU-03** | Student Group Leader | Frequently organizes group projects and needs to coordinate large room bookings efficiently. |

## 4. Validation Method
Explain how the test was conducted.

- **Testing method**: Moderated Usability Testing & Structured Experiment Script (using Scenario Task Walkthroughs).
- **Date/time**: Conducted during Lab 7 validation window (prior to Lab 8 analysis)[cite: 1].
- **Location or online platform**: On-campus computer labs and mobile device testing sessions.
- **Number of testers**: 15 participants (representing diverse student roles and requirements).
- **Data collected**: Task Completion Status (Yes/No), Completion Time (Seconds), Ease of Use Score (1-5 Scale), Usefulness Score (1-5 Scale), Would Use Again Status (Yes/No), and Recorded Confusion Points/Notes[cite: 1].

## 5. Summary of Results
*(Calculated using DAX measures developed in Power BI[cite: 1])*

| Metric | Result | Interpretation |
|---|---:|---|
| **Total test users** | 15 | Representative sample size of the target student demographic on campus. |
| **Task success rate** | 86.7% | High success rate; most users successfully navigated and submitted the booking form[cite: 1]. |
| **Average ease of use** | 4.2 / 5.0 | Users generally found the layout and interactive calendar flow intuitive[cite: 1]. |
| **Average interest level** | 80.0% | Strong early adoption interest; students strongly prefer this over the current manual paper process[cite: 1]. |
| **Most common confusion point** | "Required fields" indicator | Several users were confused by which booking form inputs were mandatory[cite: 1]. |

## 6. Key User Comments
Summarize repeated comments and useful evidence.

- **On Multi-language capability**: *"Having the English option makes it so much easier as an international student. I used to rely on my Thai friends to write the paper requests for me."* (TU-02)
- **On Calendar selection**: *"The interactive time slots layout is extremely clear. Much better than guessing if a room is free."* (TU-01)
- **On Form submission friction**: *"It wasn’t immediately clear which fields on the reservation form were mandatory to fill out before hitting the submit button."* (TU-03)[cite: 1]

## 7. Affected Requirements
| Requirement ID | Evidence Found | Required Prototype Improvement |
|---|---|---|
| **FR-02** (Booking Form Validation) | Users clicked "Submit" without filling out essential contact fields, causing a flow pause and confusion[cite: 1]. | Add clear red asterisks (`*`) to required form fields and implement instant inline validation errors before submission. |
| **FR-03** (Multi-Language Layout) | Certain labels in the English version occasionally clipped or wrapped poorly on narrow screens. | Refine CSS styling and layout containers to dynamically adjust for variable English/Thai text string lengths on mobile viewports. |

## 8. Conclusion
**Status**: **Partially Validated**  
While the high Task Success Rate (86.7%) and strong Interest Rate (80.0%) validate the core utility and user demand for the BookUP platform[cite: 1], the current MVP direction requires **minor UI revisions**[cite: 1]. The team will implement mandatory form visual indicators and refine dynamic text responsiveness before moving into final implementation. This evidence-based decision ensures our upcoming development cycle is directly tuned to eliminate observed user friction[cite: 1].

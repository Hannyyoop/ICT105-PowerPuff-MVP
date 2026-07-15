# Lab 08 - Analytics Insights

## 1. Analytics Question
What did users do, say, and prove when testing the MVP direction?

Our validation experiment focused on proving whether university students could autonomously complete a room reservation using our digital workflow without administrative staff intervention. Based on the validation dataset, users successfully proved that a self-service web interface is highly desired, but they also highlighted specific layout and form fields that caused minor friction during the reservation lifecycle.

## 2. Metrics Calculated
*(Calculated using DAX measures developed in Power BI[cite: 1])*

| Metric | Formula / Method | Result |
|---|---|---|
| **Total test users** | `DISTINCTCOUNT('ValidationResults'[TestUserID])`[cite: 1] | 15 |
| **Completed tasks** | `CALCULATE(COUNTROWS('ValidationResults'), 'ValidationResults'[TaskCompleted] = "Yes")`[cite: 1] | 13 |
| **Task success rate** | `DIVIDE([Completed Tasks], [Total Tests])`[cite: 1] | 86.7% |
| **Average feedback score** | `AVERAGE('ValidationResults'[EaseOfUseScore])`[cite: 1] | 4.2 / 5.0 |
| **Average interest level** | `AVERAGE('ValidationResults'[UsefulnessScore])`[cite: 1] | 4.5 / 5.0 |
| **Confusion points** | `COUNTROWS` grouped by `ConfusionPoint`[cite: 1] | 4 (Required fields indicator)[cite: 1] |

## 3. Findings
Write at least three evidence-based findings.

1. **High Intent to Adopt**: The Average Usefulness rating scored 4.5/5.0, proving that students have a strong desire to transition away from the current physical paper-form booking process.
2. **Form Layout Friction**: Out of the 15 tests conducted, 4 users experienced hesitation at the booking confirmation screen due to a lack of clear visual cues showing which form fields (e.g., Student ID, Purpose) were mandatory[cite: 1].
3. **Task Completion and Speed**: We achieved an 86.7% task success rate with an average completion time of under 45 seconds, proving the digital booking flow is highly efficient compared to the multi-minute manual alternative[cite: 1].

## 4. Interpretation
Explain what the results mean for the prototype.

The metrics show that while the overall system flow is highly functional and desired, the MVP is "Partially Validated"[cite: 1]. The success rate of 86.7% is strong, but to push it past 90%, we must simplify the booking form layout. The data proves that we do not need to rewrite the core scheduling engine; instead, we must focus our immediate frontend development cycles on polishing form validation, adding clear mandatory field indicators, and refining responsive UI elements on smaller mobile screen widths.

## 5. Requirements Affected
| Requirement ID | Evidence | Action Needed |
|---|---|---|
| **FR-02** (Select Time Slot & Book Space) | 4 users paused or tried to submit the reservation form with incomplete fields because required inputs weren't marked clearly[cite: 1]. | Add explicit red asterisks (`*`) next to mandatory form fields and block the submission button until those fields are valid. |
| **FR-03** (Multi-Language Interface) | International testers reported that some localized English translations wrapped awkwardly on the mobile prototype view. | Refine CSS flexbox properties on the room discovery dashboard to ensure clean text scaling for both Thai and English strings. |

## 6. Next Prototype Improvement
List improvements before implementation continues.

1. **Implement Mandatory Form Indicators**: Add prominent asterisks (`*`) on Student ID, Contact Info, and Booking Purpose input fields within the interactive calendar modal.
2. **Inline Validation and Error Messages**: Write frontend JS alerts or states that prevent form submission and highlight missing fields instantly.
3. **Responsive Typography Tuning**: Audit the English language navigation bar and dashboard buttons on mobile viewports to prevent clipping and unintended layout shifts.

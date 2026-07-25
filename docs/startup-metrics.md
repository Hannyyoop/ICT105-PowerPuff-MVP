# Startup / Product Metrics

> Define metrics that show useful product activity. Metrics should not be random numbers. Each metric should help the team understand system usage, booking activity, user value, validation, or operational performance.

## 1. Metrics Summary

| Metric ID | Metric Name | Metric Type | Why This Metric Matters | Formula / How to Calculate | Data Source | Prototype Screen |
|---|---|---|---|---|---|---|
| M-01 | Total Booking Requests | Usage | Shows how many booking requests have been submitted through the system. | Count all booking records | LocalStorage `bookings` | Admin Dashboard |
| M-02 | Pending Booking Requests | Status | Shows how many booking requests still require administrator action. | Count bookings where status = `Pending` | LocalStorage `bookings` | Admin Dashboard |
| M-03 | Approved Bookings | Status | Shows how many booking requests have been successfully approved. | Count bookings where status = `Approved` | LocalStorage `bookings` | Admin Dashboard |
| M-04 | Rejected Bookings | Status | Shows how many booking requests have been rejected by administrators. | Count bookings where status = `Rejected` | LocalStorage `bookings` | Admin Dashboard |
| M-05 | Available Rooms | Usage / Operations | Shows how many rooms are currently available for students to book. | Count rooms where status = `Available` | LocalStorage `rooms` | Admin Dashboard |
| M-06 | Booking Approval Rate | Validation | Shows how often submitted booking requests are approved. | Approved bookings / total processed bookings × 100 | LocalStorage `bookings` | Admin Dashboard |
| M-07 | Booking Completion Rate | Validation | Shows whether users can successfully complete the main booking process. | Successfully submitted bookings / booking attempts × 100 | LocalStorage and validation results | Analytics Summary |
| M-08 | Average Booking Processing Time | Operational Performance | Shows how quickly administrators process booking requests. | Total processing time / number of processed bookings | Booking records | Admin Dashboard / Analytics Summary |

## 2. Metrics Interpretation

The selected metrics help the team understand how effectively the Room Booking System supports the main booking workflow. **Total Booking Requests** shows whether students are actively using the system to submit room requests, while **Pending Booking Requests** helps administrators identify unresolved requests that require attention. The number of **Approved and Rejected Bookings** shows the outcome of submitted requests and helps the team understand the administrative workload. **Available Rooms** provides an overview of current room availability and helps administrators monitor room resources. The **Booking Approval Rate** can indicate whether most requests are successfully processed or whether there may be issues with room availability or booking requirements. The **Booking Completion Rate** helps validate whether users can successfully complete the main task of submitting a room booking request. Finally, **Average Booking Processing Time** can help identify whether administrators are reviewing requests efficiently. Based on these metrics, the team should focus on improving the booking submission process, reducing unresolved pending requests, ensuring accurate room availability information, and making the administrator approval workflow efficient.

## 3. Link to Final Prototype

The metrics will be demonstrated through the **Admin Dashboard** of the final prototype. The dashboard will display key summary cards showing the **Total Booking Requests**, **Pending Requests**, **Approved Bookings**, **Rejected Bookings**, and **Available Rooms**.

The metrics will be calculated dynamically using booking and room data stored in **LocalStorage**. For example, when a student submits a booking request, the **Total Booking Requests** and **Pending Booking Requests** values will increase. When an administrator approves or rejects a request, the corresponding status metric will be updated automatically.

The final prototype may also include simple charts or visual summaries to help administrators understand booking activity and room usage. These metrics are intended to demonstrate how the system could support decision-making in a future version with a real backend and database.

The metrics are for prototype demonstration and validation purposes. Since the current system uses simulated data and LocalStorage rather than a real multi-user backend, the metrics do not represent actual university-wide booking activity.

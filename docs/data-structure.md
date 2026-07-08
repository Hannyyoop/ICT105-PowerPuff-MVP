# Data Structure

## Project Title
**University Room Booking System**

---

## 1. Main Data Entities / Tables

| Entity / Table | Purpose | Example Records |
|----------------|---------|-----------------|
| Rooms | Store room information such as room number, capacity, and availability. | Room A101, Room B201 |
| Bookings | Store booking details made by students. | BK001, BK002 |
| Users (Simulated) | Represent students and staff using the system. Login is simulated in the prototype. | Student A, Staff Admin |

---

## 2. Field Definition

| Entity | Field Name | Data Type | Required? | Example Value | Validation Rule | Used For Search/Filter? |
|--------|------------|-----------|-----------|---------------|-----------------|-------------------------|
| Room | room_id | Text/ID | Yes | R001 | Unique value | Yes |
| Room | room_name | Text | Yes | Room A101 | Cannot be empty | Yes |
| Room | capacity | Number | Yes | 20 | Must be greater than 0 | No |
| Room | location | Text | Yes | Building A | Cannot be empty | Yes |
| Booking | booking_id | Text/ID | Yes | BK001 | Unique value | Yes |
| Booking | room_id | Text | Yes | R001 | Must match an existing room | Yes |
| Booking | booking_date | Date | Yes | 2026-07-10 | Valid date | Yes |
| Booking | start_time | Time | Yes | 09:00 | Valid time | Yes |
| Booking | end_time | Time | Yes | 11:00 | Must be later than start time | Yes |
| Booking | booked_by | Text | Yes | Student A | Cannot be empty | Yes |
| Booking | purpose | Text | Yes | Group Study | Cannot be empty | No |
| Booking | status | Text/List | Yes | Confirmed | Pending, Confirmed, Cancelled, Completed | Yes |

---

## 3. Status Values

| Status | Meaning | Who Can Update? |
|--------|---------|-----------------|
| Pending | Booking has been submitted and is awaiting confirmation. | Student / Staff |
| Confirmed | Booking has been approved and reserved successfully. | Staff |
| Cancelled | Booking has been cancelled by the student. | Student |
| Completed | Booking session has finished successfully. | Staff |

---

## 4. Sample Records

Sample booking records are stored in:



## 5. Data Privacy Note

This prototype **does not collect real personal information**. All names, booking records, and room reservations are sample data created for demonstration purposes.

The prototype does **not** collect:

- Student ID numbers
- Passwords
- Phone numbers
- Email addresses
- Financial information
- Location tracking
- Any other sensitive personal data

Since this is a frontend prototype, all booking information is stored locally in the browser using **Local Storage**. Sample records are anonymized using generic names such as **Student A**, **Student B**, and **Staff Admin** to protect user privacy.

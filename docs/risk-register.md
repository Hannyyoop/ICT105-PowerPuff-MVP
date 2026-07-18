# Risk Register

| Risk ID | Category | Risk Description | Affected Feature / Requirement | Severity | Likelihood | Mitigation Action | Owner | GitHub Evidence | Status |
|---|---|---|---|---|---|---|---|---|---|
| R-01 | Privacy | Student personal information may be visible to unauthorized users. | Student booking information (FR-02, FR-03) | High | Medium | Restrict access to student information and display only necessary data. | Development Team | N/A | Open |
| R-02 | Ethical | Students may make fake or unnecessary room bookings, preventing others from using study rooms. | Room booking (FR-02) | Medium | Medium | Allow users to cancel bookings and let library staff monitor inappropriate bookings. | Development Team | N/A | Open |
| R-03 | IP | Images or icons used in the prototype may be copyrighted. | User interface | Low | Medium | Use royalty-free images and open-source icons with proper attribution. | Design Team | N/A | Open |
| R-04 | Security | Unauthorized users may access the admin dashboard or modify booking records. | Admin management (FR-06) | High | Low | Restrict admin functions to library staff and use secure login authentication. | Development Team | N/A | Open |
| R-05 | Legal | Student booking information may not comply with university privacy policies. | Student data (FR-03) | Medium | Low | Collect only necessary information and follow university data protection guidelines. | Project Team | N/A | Open |
| R-06 | Data Quality | Incorrect booking dates or times may cause double bookings or scheduling conflicts. | Booking form (FR-03, FR-05) | Medium | Medium | Validate booking information and prevent duplicate bookings automatically. | Development Team | N/A | Open |

## Overall Risk Decision

The prototype is safe to continue developing because the identified risks can be managed through proper validation, access control, and data protection. Before implementation, the team should ensure that personal information is protected, only authorized library staff can manage bookings, and the system validates booking dates and times to prevent double bookings.

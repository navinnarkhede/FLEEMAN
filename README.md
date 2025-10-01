📌 Fleet Management System (FleeMan) – Smart Vehicle Rental & Management Platform! 🚗🚀
Excited to showcase our project Fleet Management System, a full-stack web application designed to simplify and automate vehicle rental, booking, and management. Built with scalability, security, and real-world usability in mind.

✨ Core Highlights:
✅ Booking & Handover Module – Smooth vehicle booking, pickup, and return management.
✅ Maintenance & Fuel Logs – Track repairs, servicing, and fuel consumption for cost optimization.
✅ Customer & Staff Modules – Separate dashboards for admins, staff, and customers.
✅ Robust Tech Stack – Java, Spring Boot 3, ReactJS, MySQL, JWT Authentication, Docker, REST APIs.
✅ Feature-Rich – User authentication, vehicle assignment, insurance tracking, accident reporting, and billing.

💡 Key Takeaways:
🔹 Hands-on experience with Spring Boot, REST APIs, ReactJS, and MySQL.
🔹 Implemented secure authentication, booking workflows, and billing automation.
🔹 Explored microservice concepts & Dockerization for scalability.
🔹 Enhanced teamwork, problem-solving, and Agile development skills.

🙏 A big thank you to my teammates for their dedication and collaboration 👏
🙏 Special thanks to our mentors for their constant guidance:
Jayant Ponkshe sir, Nitin Vijaykar sir, Ketki Acharya mam, Pooja Magan mam, Dr. Nidhi Poddar mam

Grateful to SM VITA College and CDAC for giving us this opportunity to build an industry-ready solution. This project has been a remarkable learning journey, and I’m excited for what’s next! 🚀

🔗 GitHub Repo: https://lnkd.in/d87kRTWw

Would you like me to also make a shorter LinkedIn-friendly version (2–3 crisp paragraphs) so it looks more engaging to recruiters?

You said:
# FLEEMAN
# give me full readme for that project
ChatGPT said:

Perfect 👍 You want a full README.md for your Fleet Management System (FleeMan) project.
I’ll create a detailed, professional GitHub-style README that covers overview, features, tech stack, architecture, setup instructions, database design, and contribution guidelines.

Here’s the complete draft:

🚗 FleeMan – Fleet Management System

FleeMan is a full-stack fleet management web application designed to simplify vehicle rentals, bookings, and overall fleet operations. The system is built with scalability, security, and real-world usability in mind, providing separate modules for customers, staff, and administrators.

📖 Table of Contents

Overview

Features

Tech Stack

System Architecture

Database Design

Installation & Setup

Usage Flow

API Endpoints

Future Enhancements

Contributors

License

🔎 Overview

The FleeMan System streamlines the vehicle rental process by providing an easy-to-use platform where:

Customers can search, book, and return vehicles.

Staff can manage bookings, monitor vehicle conditions, and handle returns.

Admins can track insurance, fuel, maintenance, and generate reports.

This project was developed as part of an academic + industry-ready solution, following Agile methodologies.

✨ Features

✅ Authentication & Authorization (JWT-based login & roles: Admin, Staff, Customer)
✅ Vehicle Booking & Handover (Pickup, return, and availability check)
✅ Maintenance & Fuel Logs (Track repair costs, fuel usage, and servicing schedules)
✅ Insurance & Accident Tracking (Expiry reminders, claims, and reports)
✅ Customer & Staff Modules (Separate dashboards and functionalities)
✅ Billing & Invoicing (Auto-generated bills with rental duration & extra charges)
✅ Reporting & Analytics (Fleet utilization, cost breakdown, and efficiency metrics)

🛠 Tech Stack

Frontend:

React.js

TailwindCSS / Bootstrap (UI Styling)

Axios (API Calls)

Backend:

Java 17

Spring Boot 3 (REST APIs, Dependency Injection, Validation)

Spring Security + JWT Authentication

Database:

MySQL (RDBMS for structured data)

Hibernate / JPA

Other Tools:

Docker (Containerization)

Postman (API Testing)

Git/GitHub (Version Control)

🏗 System Architecture
+---------------------+
|   React Frontend    |
| (Customer/Staff/Admin|
+---------+-----------+
          |
          v
+---------------------+
|   Spring Boot API   |
|  (Controllers, DTO, |
| Services, Security) |
+---------+-----------+
          |
          v
+---------------------+
|     MySQL DB        |
| (Vehicles, Users,   |
| Bookings, Fuel, etc)|
+---------------------+

🗄 Database Design

Main Tables:
User (UserID, Name, Email, Role, PasswordHash)
Vehicle (VehicleID, Model, Type, Status, RatePerDay, InsuranceID)
Booking (BookingID, VehicleID, CustomerID, StartDate, EndDate, Status, BillID)
Maintenance (MaintenanceID, VehicleID, Date, Description, Cost)
FuelLog (FuelID, VehicleID, Date, Quantity, Cost
Insurance (InsuranceID, VehicleID, ExpiryDate, Provider, Status)
AccidentReport (ReportID, VehicleID, Date, Details, Cost)
Bill (BillID, BookingID, TotalAmount, Date)

⚙ Installation & Setup
Prerequisites
Install Java 17+
Install Node.js (v16+) & npm
Install MySQL Server
Install Docker (optional, for containerization)
Backend Setup
# Clone repository
git clone https://github.com/your-username/fleeman.git
cd fleeman/backend

# Configure MySQL (application.properties)
spring.datasource.url=jdbc:mysql://localhost:3306/fleeman
spring.datasource.username=root
spring.datasource.password=yourpassword

# Run backend
mvn spring-boot:run

Frontend Setup
cd fleeman/frontend

# Install dependencies
npm install

# Start development server
npm start

Access app at: http://localhost:3000/

🚦 Usage Flow
Customer registers/logs in → Browse available vehicles → Book a vehicle.
Staff verifies booking → Approves & hands over vehicle → Updates system.
Customer returns vehicle → Staff checks condition → Generates bill.
Admin monitors → Fleet health, insurance, accidents, and generates reports.

📡 API Endpoints
User
POST /api/auth/register – Register new user
POST /api/auth/login – Login user (JWT token)

Vehicle
GET /api/vehicles – Get all vehicles
POST /api/vehicles – Add new vehicle (Admin only)

Booking
POST /api/bookings – Create booking
GET /api/bookings/{id} – Get booking details

Maintenance
POST /api/maintenance – Add maintenance record
GET /api/maintenance/{vehicleId} – Get records for a vehicle

(Full list in Swagger/Postman docs)

🚀 Future Enhancements
Real-time vehicle tracking (GPS integration)
Dynamic pricing based on demand & availability
Integration with payment gateways (Stripe/PayPal)
Role-based notifications (SMS/Email alerts)
Advanced reporting with charts & analytics

👨‍💻 Contributors

👤 Team FleeMan (SM VITA – CDAC Project)

Sanskruti Yealkar
Navin Narkhede
Adwyait Pawar
Harshal Kolhe
Shivendra Patel
Kapil Bhajipale
Himanshu Dekathe
Sahil Mhatre
Khushaboo Gupta


🙏 Mentors:
Jayant Ponkshe Sir
Nitin Vijaykar Sir
Ketki Acharya Mam
Pooja Magan Mam
Dr. Nidhi Poddar Mam

📜 License
This project is licensed under the MIT License – feel free to use, modify, and distribute with attribution.

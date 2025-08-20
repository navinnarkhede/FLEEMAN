
# 🚗 Fleet Management System (Car Rental Backend)

This project is a **Car Rental and Fleet Management System** developed using **Spring Boot**, **Spring Security (JWT)**, **Spring Data JPA**, and **MySQL**. It handles end-to-end car booking, invoice generation, customer management, hub-based availability, and email notifications.

---

## 📌 Features

- ✅ Customer Registration & Login (JWT Secured)
- ✅ Browse Cars by Hub & Category
- ✅ Bookings with Date & Hub Selection
- ✅ Add-On Services (e.g., GPS, Baby Seat)
- ✅ Auto Invoice Generation
- ✅ Return Car & Update Status
- ✅ Email Notification (with attachments)
- ✅ RESTful APIs with Spring Boot
- ✅ Secure API access using JWT

---

## 🧱 Tech Stack

| Layer           | Technology        |
|----------------|-------------------|
| Backend         | Spring Boot       |
| Security        | Spring Security + JWT |
| Database        | MySQL             |
| ORM             | Spring Data JPA   |
| Email Service   | JavaMailSender    |
| Build Tool      | Maven             |
| API Testing     | Postman           |

---

## 📂 Project Structure

```text
com.example.demo
│
├── controllers          # All REST API endpoints
├── entities             # JPA Entity classes
├── repositories         # JPA Repositories
├── services             # Service layer logic
│    ├── impl            # Implementation classes
│
├── jwt                  # JWT Auth logic
│
├── FleetManFinalApplication.java   # Main Spring Boot application
```

---

## 🚀 How It Works

### 🔐 Authentication

- `/login/{email}/{password}` — Authenticates and returns a **JWT token**
- JWT filter validates token on each request
- Only authenticated users can access protected endpoints

### 📦 Booking Flow

1. Customer registers and logs in
2. Car availability is shown per **hub** and **type**
3. Booking is created via `/api/addbooking`
5. Invoice is generated via `/invoice`
6. Email confirmation is sent
7. On return, car is marked available and invoice is updated
4. Add-Ons are added via `/bookingdetails`

---

## 🛠️ Endpoints (Samples)

### Customer

```http
POST    /customer                    # Register
GET     /login/{email}/{password}   # Login
GET     /getcustomer/id/{id}        # Get by ID
```

### Booking

```http
POST    /api/addbooking
GET     /api/booking/email/{email}
DELETE  /api/deletebooking/{id}
```

### Car

```http
GET     /car/{hub_id}/{CarType_ID}
PUT     /car/update/{carId}
PUT     /car/update/{carId}/{status}
```

### Invoice

```http
POST    /invoice
GET     /invoice/{bookingId}
GET     /invoice/email/{email}
GET     /invoice/{totalAddonAmount}/{totalAmount}/{rentalAmount}/{invoiceId}
```

### Email

```http
POST    /sendMail
POST    /sendMailWithAttachment
```

---

## 📧 Email Configuration (application.properties)

```properties
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=your_email@gmail.com
spring.mail.password=your_app_password
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
```

---

## 🔑 JWT Configuration

```properties
jwt.secret=MySecretKeyForJwtToken1234
```

---

## 🧪 Testing (Postman Collection)

- [ ] Register User
- [ ] Login & Copy JWT
- [ ] Set `Authorization: Bearer <token>` in headers
- [ ] Access other endpoints like booking, car, invoice

---

## ✅ Requirements

- Java 17+
- Maven
- MySQL
- IDE (Eclipse/IntelliJ)

---

## ⚙️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fleet-management.git
   cd fleet-management
   ```

2. Set up `application.properties` with your DB and mail config

3. Run the application:
   ```bash
   mvn spring-boot:run
   ```

4. Access APIs via:
   ```
   http://localhost:8080/
   ```

---

## 👨‍💻 Developed By

**Group 8** - SM VITA ATC  
**Team Leader:** Navin Narkhede  
**Modules Covered:** Customer, Booking, Car, Hub, Invoice, AddOn, Email, JWT

---

## 📝 License

This project is for educational purposes only. © 2025 SM VITA ATC Group 8.

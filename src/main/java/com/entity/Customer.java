package com.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int custId;
    private String fullName;
    private String email;
    private String phone;
    private String localDl;
    private String passportNum;
    private String city;

    @OneToMany(mappedBy = "custId", cascade = CascadeType.ALL)
    private List<Booking> bookings;

    @OneToMany(mappedBy = "custId", cascade = CascadeType.ALL)
    private List<VehicleAssignment> assignments;

	public int getCustId() {
		return custId;
	}

	public void setCustId(int custId) {
		this.custId = custId;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getLocalDl() {
		return localDl;
	}

	public void setLocalDl(String localDl) {
		this.localDl = localDl;
	}

	public String getPassportNum() {
		return passportNum;
	}

	public void setPassportNum(String passportNum) {
		this.passportNum = passportNum;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public List<Booking> getBookings() {
		return bookings;
	}

	public void setBookings(List<Booking> bookings) {
		this.bookings = bookings;
	}

	public List<VehicleAssignment> getAssignments() {
		return assignments;
	}

	public void setAssignments(List<VehicleAssignment> assignments) {
		this.assignments = assignments;
	}
}
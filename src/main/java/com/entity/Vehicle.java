package com.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int vehicleId;
    private String registrationId;
    private String model;
    private String type;
    private int mileage;

    @OneToMany(mappedBy = "vehicleId", cascade = CascadeType.ALL)
    private List<Booking> bookings;

    @OneToMany(mappedBy = "vehicleId", cascade = CascadeType.ALL)
    private List<VehicleAssignment> assignments;

	public int getVehicleId() {
		return vehicleId;
	}

	public void setVehicleId(int vehicleId) {
		this.vehicleId = vehicleId;
	}

	public String getRegistrationId() {
		return registrationId;
	}

	public void setRegistrationId(String registrationId) {
		this.registrationId = registrationId;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getMileage() {
		return mileage;
	}

	public void setMileage(int mileage) {
		this.mileage = mileage;
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
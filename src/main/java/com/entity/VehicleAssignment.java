package com.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class VehicleAssignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int assignmentId;

    @ManyToOne
    @JoinColumn(name = "vehicle_id")
    private Vehicle vehicle;

    @ManyToOne
    @JoinColumn(name = "cust_id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Booking booking;

    private String localDl;
    private Date assignDate;
    private Date returnDate;
	public int getAssignmentId() {
		return assignmentId;
	}
	public void setAssignmentId(int assignmentId) {
		this.assignmentId = assignmentId;
	}
	public Vehicle getVehicle() {
		return vehicle;
	}
	public void setVehicle(Vehicle vehicle) {
		this.vehicle = vehicle;
	}
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	public Booking getBooking() {
		return booking;
	}
	public void setBooking(Booking booking) {
		this.booking = booking;
	}
	public String getLocalDl() {
		return localDl;
	}
	public void setLocalDl(String localDl) {
		this.localDl = localDl;
	}
	public Date getAssignDate() {
		return assignDate;
	}
	public void setAssignDate(Date assignDate) {
		this.assignDate = assignDate;
	}
	public Date getReturnDate() {
		return returnDate;
	}
	public void setReturnDate(Date returnDate) {
		this.returnDate = returnDate;
	}    
}
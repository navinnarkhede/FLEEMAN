package com.entity;

import jakarta.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookId;

    @ManyToOne
    @JoinColumn(name = "vehicle_id")
    private Vehicle vehicle;

    @ManyToOne
    @JoinColumn(name = "cust_id")
    private Customer customer;

    private Date startDate;
    private Date endDate;
    private String pickupLocation;
    private String dropdownLocation;
    private String status;

    @OneToMany(mappedBy = "bookId", cascade = CascadeType.ALL)
    private List<BookingAddOn> addOns;

	public int getBookId() {
		return bookId;
	}

	public void setBookId(int bookId) {
		this.bookId = bookId;
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

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getPickupLocation() {
		return pickupLocation;
	}

	public void setPickupLocation(String pickupLocation) {
		this.pickupLocation = pickupLocation;
	}

	public String getDropdownLocation() {
		return dropdownLocation;
	}

	public void setDropdownLocation(String dropdownLocation) {
		this.dropdownLocation = dropdownLocation;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<BookingAddOn> getAddOns() {
		return addOns;
	}

	public void setAddOns(List<BookingAddOn> addOns) {
		this.addOns = addOns;
	}

    
}
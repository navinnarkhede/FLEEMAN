package com.entity;

import jakarta.persistence.*;

@Entity
public class BookingAddOn {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Booking booking;

    @ManyToOne
    @JoinColumn(name = "addon_id")
    private AddOn addOn;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Booking getBooking() {
		return booking;
	}

	public void setBooking(Booking booking) {
		this.booking = booking;
	}

	public AddOn getAddOn() {
		return addOn;
	}

	public void setAddOn(AddOn addOn) {
		this.addOn = addOn;
	}

    
}
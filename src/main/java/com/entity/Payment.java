package com.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int transactionId;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Booking booking;

    @ManyToOne
    @JoinColumn(name = "assignment_id")
    private VehicleAssignment assignment;

    @ManyToOne
    @JoinColumn(name = "cust_id")
    private Customer customer;

    private String paymentType;
    private long cardNum;
    private int totalAddon;
    private Date date;
    private int total;
	public int getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(int transactionId) {
		this.transactionId = transactionId;
	}
	public Booking getBooking() {
		return booking;
	}
	public void setBooking(Booking booking) {
		this.booking = booking;
	}
	public VehicleAssignment getAssignment() {
		return assignment;
	}
	public void setAssignment(VehicleAssignment assignment) {
		this.assignment = assignment;
	}
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	public String getPaymentType() {
		return paymentType;
	}
	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}
	public long getCardNum() {
		return cardNum;
	}
	public void setCardNum(long cardNum) {
		this.cardNum = cardNum;
	}
	public int getTotalAddon() {
		return totalAddon;
	}
	public void setTotalAddon(int totalAddon) {
		this.totalAddon = totalAddon;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
}
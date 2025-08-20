package com.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class FuelLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int fuelId;

    @ManyToOne
    @JoinColumn(name = "cust_id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "assignment_id")
    private VehicleAssignment assignment;

    private double fuelVolume;
    private double endVolume;
    private Date date;
	public int getFuelId() {
		return fuelId;
	}
	public void setFuelId(int fuelId) {
		this.fuelId = fuelId;
	}
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	public VehicleAssignment getAssignment() {
		return assignment;
	}
	public void setAssignment(VehicleAssignment assignment) {
		this.assignment = assignment;
	}
	public double getFuelVolume() {
		return fuelVolume;
	}
	public void setFuelVolume(double fuelVolume) {
		this.fuelVolume = fuelVolume;
	}
	public double getEndVolume() {
		return endVolume;
	}
	public void setEndVolume(double endVolume) {
		this.endVolume = endVolume;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}	
}
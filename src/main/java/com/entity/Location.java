package com.entity;

import jakarta.persistence.*;

@Entity
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int hubId;
    private String hubAddress;
    private String city;
    private String state;
    private String airportCode;
	public int getHubId() {
		return hubId;
	}
	public void setHubId(int hubId) {
		this.hubId = hubId;
	}
	public String getHubAddress() {
		return hubAddress;
	}
	public void setHubAddress(String hubAddress) {
		this.hubAddress = hubAddress;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getAirportCode() {
		return airportCode;
	}
	public void setAirportCode(String airportCode) {
		this.airportCode = airportCode;
	}
}
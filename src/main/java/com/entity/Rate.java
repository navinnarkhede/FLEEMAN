package com.entity;

import jakarta.persistence.*;

@Entity
public class Rate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int rateId;
    private String carModel;
    private int dailyRate;
    private int monthlyRate;
    private int weeklyRate;
    private String season;
	public int getRateId() {
		return rateId;
	}
	public void setRateId(int rateId) {
		this.rateId = rateId;
	}
	public String getCarModel() {
		return carModel;
	}
	public void setCarModel(String carModel) {
		this.carModel = carModel;
	}
	public int getDailyRate() {
		return dailyRate;
	}
	public void setDailyRate(int dailyRate) {
		this.dailyRate = dailyRate;
	}
	public int getMonthlyRate() {
		return monthlyRate;
	}
	public void setMonthlyRate(int monthlyRate) {
		this.monthlyRate = monthlyRate;
	}
	public int getWeeklyRate() {
		return weeklyRate;
	}
	public void setWeeklyRate(int weeklyRate) {
		this.weeklyRate = weeklyRate;
	}
	public String getSeason() {
		return season;
	}
	public void setSeason(String season) {
		this.season = season;
	}

    
}
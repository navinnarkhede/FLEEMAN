package com.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class Insurance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int insuranceId;

    @ManyToOne
    @JoinColumn(name = "vehicle_id")
    private Vehicle vehicle;

    private String policyNum;
    private String provider;
    private Date startDate;
    private Date endDate;
    private int amount;

    // Getters and Setters

    public int getInsuranceId() {
        return insuranceId;
    }

    public void setInsuranceId(int insuranceId) {
        this.insuranceId = insuranceId;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    public String getPolicyNum() {
        return policyNum;
    }

    public void setPolicyNum(String policyNum) {
        this.policyNum = policyNum;
    }

    public String getProvider() {
        return provider;
    }

    public void setProvider(String provider) {
        this.provider = provider;
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

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

//    @Override
//    public String toString() {
//        return "Insurance{" +
//                "insuranceId=" + insuranceId +
//                ", vehicle=" + (vehicle != null ? vehicle.getVehicleId() : "null") +
//                ", policyNum='" + policyNum + '\'' +
//                ", provider='" + provider + '\'' +
//                ", startDate=" + startDate +
//                ", endDate=" + endDate +
//                ", amount=" + amount +
//                '}';
//    }
    
}

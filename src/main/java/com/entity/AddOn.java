package com.entity;

import jakarta.persistence.*;

@Entity
public class AddOn {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int addonId;
    private boolean gpsNavigation;
    private boolean campingKit;
    private boolean childSeat;
    
	public int getAddonId() {
		return addonId;
	}
	public void setAddonId(int addonId) {
		this.addonId = addonId;
	}
	public boolean isGpsNavigation() {
		return gpsNavigation;
	}
	public void setGpsNavigation(boolean gpsNavigation) {
		this.gpsNavigation = gpsNavigation;
	}
	public boolean isCampingKit() {
		return campingKit;
	}
	public void setCampingKit(boolean campingKit) {
		this.campingKit = campingKit;
	}
	public boolean isChildSeat() {
		return childSeat;
	}
	public void setChildSeat(boolean childSeat) {
		this.childSeat = childSeat;
	}
}
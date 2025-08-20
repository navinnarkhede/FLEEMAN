package com.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.entity.Vehicle;

public interface VehicleRepository extends JpaRepository<Vehicle, Integer> {
	
}
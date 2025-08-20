package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.entity.VehicleAssignment;

public interface VehicleAssignmentRepository extends JpaRepository<VehicleAssignment, Integer> {
	
}
package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.entity.FuelLog;

public interface FuelLogRepository extends JpaRepository<FuelLog, Integer> {
	
}
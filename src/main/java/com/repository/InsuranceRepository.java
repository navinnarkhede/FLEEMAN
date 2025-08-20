package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.entity.Insurance;

public interface InsuranceRepository extends JpaRepository<Insurance, Integer> {
	
}
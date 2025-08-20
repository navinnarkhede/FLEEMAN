package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.entity.Rate;

public interface RateRepository extends JpaRepository<Rate, Integer> {
	
}
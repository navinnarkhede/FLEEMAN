package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.entity.Location;

public interface LocationRepository extends JpaRepository<Location, Integer> {
	
}
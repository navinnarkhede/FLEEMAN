package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.entity.AddOn;

public interface AddOnRepository extends JpaRepository<AddOn, Integer> {
	
}
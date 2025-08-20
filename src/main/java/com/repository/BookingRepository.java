package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.entity.Booking;

public interface BookingRepository extends JpaRepository<Booking, Integer> {
	
}
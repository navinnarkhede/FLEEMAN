package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.entity.BookingAddOn;

public interface BookingAddOnRepository extends JpaRepository<BookingAddOn, Integer> {
	
}
package com.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {
	
}

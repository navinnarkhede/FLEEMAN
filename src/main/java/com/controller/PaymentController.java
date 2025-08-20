package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.entity.Payment;
import com.repository.PaymentRepository;

import java.util.List;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    @Autowired
    private PaymentRepository repo;

    @GetMapping
    public List<Payment> getAll() 
    {
        return repo.findAll();
    }

    @PostMapping
    public Payment create(Payment payment) 
    {
        return repo.save(payment);
    }

    @GetMapping("/{id}")
    public Payment getById(int id) 
    {
        return repo.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Payment update(int id, Payment payment) 
    {
        payment.setTransactionId(id);
        return repo.save(payment);
    }

    @DeleteMapping("/{id}")
    public void delete(int id) 
    {
        repo.deleteById(id);
    }
}

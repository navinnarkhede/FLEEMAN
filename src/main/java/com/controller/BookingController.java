package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.entity.Booking;
import com.repository.BookingRepository;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController 
{

    @Autowired
    private BookingRepository repo;

    @GetMapping
    public List<Booking> getAll() 
    {
        return repo.findAll();
    }

    @PostMapping
    public Booking create(Booking booking) 
    {
        return repo.save(booking);
    }

    @GetMapping("/{id}")
    public Booking getById(int id) 
    {
        return repo.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Booking update(int id, Booking booking) 
    {
        booking.setBookId(id);
        return repo.save(booking);
    }

    @DeleteMapping("/{id}")
    public void delete(int id) 
    {
        repo.deleteById(id);
    }
}
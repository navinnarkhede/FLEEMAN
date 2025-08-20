package com.service;

import com.entity.Booking;
import com.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository repo;

    public List<Booking> getAll() 
    {
        return repo.findAll();
    }

    public Booking getById(int id) 
    {
        return repo.findById(id).orElse(null);
    }

    public Booking create(Booking b) 
    {
        return repo.save(b);
    }

    public Booking update(int id, Booking b) 
    {
        b.setBookId(id);
        return repo.save(b);
    }

    public void delete(int id) 
    {
        repo.deleteById(id);
    }
}
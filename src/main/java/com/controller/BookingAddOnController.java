package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.entity.BookingAddOn;
import com.repository.BookingAddOnRepository;
import java.util.List;

@RestController
@RequestMapping("/api/bookingaddons")
public class BookingAddOnController {

    @Autowired
    private BookingAddOnRepository repo;

    @GetMapping
    public List<BookingAddOn> getAll() 
    {
         return repo.findAll();
    }

    @PostMapping
    public BookingAddOn create(BookingAddOn bookingAddOn) 
    {
        return repo.save(bookingAddOn);
    }

    @GetMapping("/{id}")
    public BookingAddOn getById(int id) 
    {
        return repo.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public BookingAddOn update(int id, BookingAddOn bookingAddOn) 
    {
    	bookingAddOn.setId(id);
        return repo.save(bookingAddOn);
    }

    @DeleteMapping("/{id}")
    public void delete(int id) 
    {
        repo.deleteById(id);
    }
}

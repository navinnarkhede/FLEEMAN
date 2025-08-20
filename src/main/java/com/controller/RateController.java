package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.entity.Rate;
import com.repository.RateRepository;

import java.util.List;

@RestController
@RequestMapping("/api/rates")
public class RateController 
{
    @Autowired
    private RateRepository repo;

    @GetMapping
    public List<Rate> getAll() 
    {
        return repo.findAll();
    }

    @PostMapping
    public Rate create(Rate rate) 
    {
        return repo.save(rate);
    }

    @GetMapping("/{id}")
    public Rate getById(int id) 
    {
        return repo.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Rate update(int id, Rate rate) 
    {
        rate.setRateId(id);
        return repo.save(rate);
    }

    @DeleteMapping("/{id}")
    public void delete(int id) 
    {
        repo.deleteById(id);
    }
}

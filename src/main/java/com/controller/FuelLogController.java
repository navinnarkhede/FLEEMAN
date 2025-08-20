package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.entity.FuelLog;
import com.repository.FuelLogRepository;

import java.util.List;

@RestController
@RequestMapping("/api/fuels")
public class FuelLogController 
{
    @Autowired
    private FuelLogRepository repo;

    @GetMapping
    public List<FuelLog> getAll() 
    {
        return repo.findAll();
    }

    @PostMapping
    public FuelLog create(FuelLog log) 
    {
        return repo.save(log);
    }

    @GetMapping("/{id}")
    public FuelLog getById(int id) 
    {
        return repo.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public FuelLog update(int id, FuelLog log) 
    {
        log.setFuelId(id);
        return repo.save(log);
    }

    @DeleteMapping("/{id}")
    public void delete(int id) 
    {
        repo.deleteById(id);
    }
}
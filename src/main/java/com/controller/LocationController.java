package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.entity.Location;
import com.repository.LocationRepository;

import java.util.List;

@RestController
@RequestMapping("/api/locations")
public class LocationController 
{
    @Autowired
    private LocationRepository repo;

    @GetMapping
    public List<Location> getAll() 
    {
        return repo.findAll();
    }

    @PostMapping
    public Location create(Location location) 
    {
        return repo.save(location);
    }

    @GetMapping("/{id}")
    public Location getById(int id) 
    {
        return repo.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Location update(int id, Location location) 
    {
        location.setHubId(id);
        return repo.save(location);
    }

    @DeleteMapping("/{id}")
    public void delete(int id) 
    {
        repo.deleteById(id);
    }
}


package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.entity.Vehicle;
import com.repository.VehicleRepository;
import java.util.List;


@RestController
@RequestMapping("/api/vehicles")
public class VehicleController 
{
    @Autowired
    private VehicleRepository repo;

    @GetMapping
    public List<Vehicle> getAll() 
    {
        return repo.findAll();
    }

    @PostMapping
    public Vehicle create(Vehicle vehicle) 
    {
        return repo.save(vehicle);
    }

    @GetMapping("/{id}")
    public Vehicle getById(int id) 
    {
        return repo.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Vehicle update(int id, Vehicle vehicle) 
    {
        vehicle.setVehicleId(id);
        return repo.save(vehicle);
    }

    @DeleteMapping("/{id}")
    public void delete(int id) 
    {
        repo.deleteById(id);
    }
}

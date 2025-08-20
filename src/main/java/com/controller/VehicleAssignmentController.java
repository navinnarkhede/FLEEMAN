package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.entity.VehicleAssignment;
import com.repository.VehicleAssignmentRepository;
import java.util.List;

@RestController
@RequestMapping("/api/assignments")
public class VehicleAssignmentController 
{
    @Autowired
    private VehicleAssignmentRepository repo;

    @GetMapping
    public List<VehicleAssignment> getAll() 
    {
        return repo.findAll();
    }

    @PostMapping
    public VehicleAssignment create(VehicleAssignment assignment) 
    {
        return repo.save(assignment);
    }

    @GetMapping("/{id}")
    public VehicleAssignment getById(int id) 
    {
        return repo.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public VehicleAssignment update(int id, VehicleAssignment assignment) 
    {
        assignment.setAssignmentId(id);
        return repo.save(assignment);
    }

    @DeleteMapping("/{id}")
    public void delete(int id) 
    {
        repo.deleteById(id);
    }
}

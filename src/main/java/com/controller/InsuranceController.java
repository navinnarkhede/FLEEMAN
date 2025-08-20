package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.entity.Insurance;
import com.repository.InsuranceRepository;

import java.util.List;

@RestController
@RequestMapping("/api/insurances")
public class InsuranceController {

    @Autowired
    private InsuranceRepository repo;

    @GetMapping
    public List<Insurance> getAll() 
    {
        return repo.findAll();
    }

    @PostMapping
    public Insurance create(Insurance insurance) 
    {
        return repo.save(insurance);
    }

    @GetMapping("/{id}")
    public Insurance getById(int id) 
    {
        return repo.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Insurance update(int id, Insurance insurance) 
    {
        insurance.setInsuranceId(id);
        return repo.save(insurance);
    }

    @DeleteMapping("/{id}")
    public void delete(int id) 
    {
        repo.deleteById(id);
    }
}

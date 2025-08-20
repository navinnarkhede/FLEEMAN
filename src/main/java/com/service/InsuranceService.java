package com.service;

import com.entity.Insurance;
import com.repository.InsuranceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InsuranceService {

    @Autowired
    private InsuranceRepository repo;

    public List<Insurance> getAll() {
        return repo.findAll();
    }

    public Insurance getById(int id) {
        return repo.findById(id).orElse(null);
    }

    public Insurance create(Insurance i) {
        return repo.save(i);
    }

    public Insurance update(int id, Insurance i) {
        i.setInsuranceId(id);
        return repo.save(i);
    }

    public void delete(int id) {
        repo.deleteById(id);
    }
}
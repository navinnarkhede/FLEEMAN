package com.service;

import com.entity.FuelLog;
import com.repository.FuelLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FuelLogService {

    @Autowired
    private FuelLogRepository repo;

    public List<FuelLog> getAll() {
        return repo.findAll();
    }

    public FuelLog getById(int id) {
        return repo.findById(id).orElse(null);
    }

    public FuelLog create(FuelLog f) {
        return repo.save(f);
    }

    public FuelLog update(int id, FuelLog f) {
        f.setFuelId(id);
        return repo.save(f);
    }

    public void delete(int id) {
        repo.deleteById(id);
    }
}
package com.service;

import com.entity.Vehicle;
import com.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleService {

    @Autowired
    private VehicleRepository repo;

    public List<Vehicle> getAll() {
        return repo.findAll();
    }

    public Vehicle getById(int id) {
        return repo.findById(id).orElse(null);
    }

    public Vehicle create(Vehicle v) {
        return repo.save(v);
    }

    public Vehicle update(int id, Vehicle v) {
        v.setVehicleId(id);
        return repo.save(v);
    }

    public void delete(int id) {
        repo.deleteById(id);
    }
}

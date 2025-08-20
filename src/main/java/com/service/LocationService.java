package com.service;

import com.entity.Location;
import com.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService {

    @Autowired
    private LocationRepository repo;

    public List<Location> getAll() {
        return repo.findAll();
    }

    public Location getById(int id) {
        return repo.findById(id).orElse(null);
    }

    public Location create(Location l) {
        return repo.save(l);
    }

    public Location update(int id, Location l) {
        l.setHubId(id);
        return repo.save(l);
    }

    public void delete(int id) {
        repo.deleteById(id);
    }
}
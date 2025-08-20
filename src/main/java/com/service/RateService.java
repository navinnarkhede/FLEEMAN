package com.service;

import com.entity.Rate;
import com.repository.RateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RateService {

    @Autowired
    private RateRepository repo;

    public List<Rate> getAll() {
        return repo.findAll();
    }

    public Rate getById(int id) {
        return repo.findById(id).orElse(null);
    }

    public Rate create(Rate r) {
        return repo.save(r);
    }

    public Rate update(int id, Rate r) {
        r.setRateId(id);
        return repo.save(r);
    }

    public void delete(int id) {
        repo.deleteById(id);
    }
}
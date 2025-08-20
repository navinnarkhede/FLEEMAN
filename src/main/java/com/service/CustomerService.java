package com.service;

import com.entity.Customer;
import com.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository repo;

    public List<Customer> getAll() {
        return repo.findAll();
    }

    public Customer getById(int id) {
        return repo.findById(id).orElse(null);
    }

    public Customer create(Customer customer) {
        return repo.save(customer);
    }

    public Customer update(int id, Customer customer) {
        customer.setCustId(id);
        return repo.save(customer);
    }

    public void delete(int id) {
        repo.deleteById(id);
    }
}
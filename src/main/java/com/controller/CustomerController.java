package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.entity.Customer;
import com.repository.CustomerRepository;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerController 
{
    @Autowired
    private CustomerRepository repo;

    @GetMapping
    public List<Customer> getAll() 
    {
        return repo.findAll();
    }

    @PostMapping
    public Customer create(@RequestBody Customer customer) 
    {
        return repo.save(customer);
    }

    @GetMapping("/{id}")
    public Customer getById(@PathVariable int id) 
    {
        return repo.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Customer update(@PathVariable int id, @RequestBody Customer customer) 
    {
        customer.setCustId(id);
        return repo.save(customer);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) 
    {
        repo.deleteById(id);
    }
}

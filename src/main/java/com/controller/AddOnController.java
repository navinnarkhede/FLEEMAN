package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.entity.AddOn;
import com.repository.AddOnRepository;

import java.util.List;

@RestController
@RequestMapping("/api/addons")
public class AddOnController 
{
	@Autowired
    private AddOnRepository repo;

    @GetMapping
    public List<AddOn> getAll() 
    {
        return repo.findAll();
    }

    @PostMapping
    public AddOn create(AddOn addon) 
    {
        return repo.save(addon);
    }

    @GetMapping("/{id}")
    public AddOn getById(int id) 
    {
        return repo.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public AddOn update(int id, AddOn addon) 
    {
        addon.setAddonId(id);
        return repo.save(addon);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) 
    {
        repo.deleteById(id);
    }
}

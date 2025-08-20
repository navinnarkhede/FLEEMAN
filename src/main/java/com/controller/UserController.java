package com.controller;

import com.entity.User;                         
import com.repository.UserRepository;          
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository repo;

    @GetMapping
    public List<User> getAll() 
    {
        return repo.findAll();
    }

    @PostMapping
    public User create(User user) 
    {
        return repo.save(user);
    }

    @GetMapping("/{id}")
    public User getById(int id) 
    {
        return repo.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public User update(int id, User user)
    {
        user.setUserId(id);
        return repo.save(user);
    }

    @DeleteMapping("/{id}")
    public void delete(int id) 
    {
        repo.deleteById(id);
    }
}

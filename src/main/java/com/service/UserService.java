package com.service;

import com.entity.User;
import com.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public List<User> getAll() 
    {
        return repo.findAll();
    }

    public User getById(int id) 
    {
        return repo.findById(id).orElse(null);
    }

    public User create(User u) 
    {
        return repo.save(u);
    }

    public User update(int id, User u) 
    {
        u.setUserId(id);
        return repo.save(u);
    }

    public void delete(int id) 
    {
        repo.deleteById(id);
    }
}
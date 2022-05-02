package com.example.project.service.impl;

import com.example.project.entity.Location;
import com.example.project.service.LocationService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationServiceImpl implements LocationService {
    @Override
    public List<Location> getStates(String state) {
        return null;
    }
}

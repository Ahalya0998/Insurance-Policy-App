package com.insurance.service;

import com.insurance.model.Policy;

import java.util.List;
import java.util.Optional;

public interface PolicyService {
    List<Policy> getAllPolicies();
    Optional<Policy> getPolicyById(Long id);
    Policy addPolicy(Policy policy);
    Policy updatePolicy(Long id, Policy policy);
    void deletePolicy(Long id);
}


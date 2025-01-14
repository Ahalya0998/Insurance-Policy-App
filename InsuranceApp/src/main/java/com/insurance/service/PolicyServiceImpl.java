package com.insurance.service;

import com.insurance.model.Policy;
import com.insurance.repository.PolicyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PolicyServiceImpl implements PolicyService {

    @Autowired
    private PolicyRepository policyRepository;

    @Override
    public List<Policy> getAllPolicies() {
        return policyRepository.findAll();
    }

    @Override
    public Optional<Policy> getPolicyById(Long id) {
        return policyRepository.findById(id);
    }

    @Override
    public Policy addPolicy(Policy policy) {
        return policyRepository.save(policy);
    }

    @Override
    public Policy updatePolicy(Long id, Policy policy) {
        Optional<Policy> existingPolicy = policyRepository.findById(id);
        if (existingPolicy.isPresent()) {
            Policy updatedPolicy = existingPolicy.get();
            updatedPolicy.setPolicyName(policy.getPolicyName());
            updatedPolicy.setPolicyNumber(policy.getPolicyNumber());
            updatedPolicy.setPolicyType(policy.getPolicyType());
            updatedPolicy.setPolicyTerm(policy.getPolicyTerm());
            updatedPolicy.setStartDate(policy.getStartDate());
            updatedPolicy.setEndDate(policy.getEndDate());
            updatedPolicy.setPremiumAmount(policy.getPremiumAmount());
            updatedPolicy.setPaymentFrequency(policy.getPaymentFrequency());
            updatedPolicy.setNomineeName(policy.getNomineeName());
            updatedPolicy.setLastPaymentDate(policy.getLastPaymentDate());
            updatedPolicy.setNextPaymentDueDate(policy.getNextPaymentDueDate());
            updatedPolicy.setFullName(policy.getFullName());
            updatedPolicy.setDateOfBirth(policy.getDateOfBirth());
            updatedPolicy.setContactNumber(policy.getContactNumber());
            updatedPolicy.setEmailAddress(policy.getEmailAddress());
            return policyRepository.save(updatedPolicy);
        } else {
            throw new RuntimeException("Policy with ID " + id + " not found");
        }
    }

    
    @Override
   public void deletePolicy(Long id) {
        if (policyRepository.existsById(id)) {
           policyRepository.deleteById(id);
        } else {
            throw new RuntimeException("Policy with ID " + id + " not found");
        }
   }
    
}

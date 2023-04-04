package com.iorga.demo.services;

import javax.management.Query;

import org.springframework.boot.autoconfigure.security.SecurityProperties.User;

import com.iorga.demo.entities.Customer;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;

public class Service {
    @PersistenceContext
    private EntityManager entityManager;

    public Customer findByName(String name) {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Customer> criteria = builder.createQuery(Customer.class);
        Root<Customer> customerEntity = criteria.from(Customer.class);

    }

}

package com.iorga.demo;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.AutoConfigureTestEntityManager;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;

import com.iorga.demo.entities.Address;
import com.iorga.demo.entities.Customer;
import com.iorga.demo.entities.EmailAddress;
import com.iorga.demo.entities.Item;
import com.iorga.demo.entities.Product;
import com.iorga.demo.entities.PurchaseOrder;
// import com.iorga.demo.services.Service;

import jakarta.transaction.Transactional;

@SpringBootTest
@AutoConfigureTestDatabase(replace=Replace.NONE)
@AutoConfigureTestEntityManager
@Transactional
public class ExerciseTest {
    
    @Autowired
    private TestEntityManager entityManager;

    @Test
    public void FindCustomerTest() {
        var customer = entityManager.getEntityManager().find(Customer.class, 1);
        assertNotNull(customer);
    }
    

}


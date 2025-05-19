package com.electricity.billcalculator.controller;

import com.electricity.billcalculator.entity.Billing;
import com.electricity.billcalculator.entity.Consumer;
import com.electricity.billcalculator.repository.ConsumerRepository;
import com.electricity.billcalculator.service.BillingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class BillingController {

    private final BillingService billingService;
    private final ConsumerRepository consumerRepository;

    public BillingController(BillingService billingService, ConsumerRepository consumerRepository) {
        this.billingService = billingService;
        this.consumerRepository = consumerRepository;
    }

    @PostMapping("/consumer")
    public Consumer addConsumer(@RequestBody Consumer consumer) {
        return consumerRepository.save(consumer);
    }

    @PostMapping("/bill")
    public Billing generateBill(@RequestParam Long consumerId, @RequestParam int units) {
        return billingService.generateBill(consumerId, units);
    }

    @GetMapping("/consumers")
    public List<Consumer> getAllConsumers() {
        return consumerRepository.findAll();
    }
}

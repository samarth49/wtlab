package com.electricity.billcalculator.service;

import com.electricity.billcalculator.entity.Billing;
import com.electricity.billcalculator.repository.BillingRepository;
import org.springframework.stereotype.Service;

@Service
public class BillingService {

    private final BillingRepository billingRepository;

    public BillingService(BillingRepository billingRepository) {
        this.billingRepository = billingRepository;
    }

    public double calculateAmount(int units) {
        double amount = 0;
        if (units <= 50) {
            amount = units * 3.5;
        } else if (units <= 150) {
            amount = 50 * 3.5 + (units - 50) * 4.0;
        } else if (units <= 250) {
            amount = 50 * 3.5 + 100 * 4.0 + (units - 150) * 5.2;
        } else {
            amount = 50 * 3.5 + 100 * 4.0 + 100 * 5.2 + (units - 250) * 6.5;
        }
        return amount;
    }

    public Billing generateBill(Long consumerId, int units) {
        double amount = calculateAmount(units);
        Billing bill = new Billing(null, consumerId, units, amount, null);
        return billingRepository.save(bill);
    }
}

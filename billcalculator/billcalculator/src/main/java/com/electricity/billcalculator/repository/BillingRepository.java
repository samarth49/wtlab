package com.electricity.billcalculator.repository;

import com.electricity.billcalculator.entity.Billing;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BillingRepository extends JpaRepository<Billing, Long> {}

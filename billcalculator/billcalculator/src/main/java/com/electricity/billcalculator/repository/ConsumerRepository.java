package com.electricity.billcalculator.repository;

import com.electricity.billcalculator.entity.Consumer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsumerRepository extends JpaRepository<Consumer, Long> {}

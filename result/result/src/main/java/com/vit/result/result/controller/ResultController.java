package com.vit.result.result.controller;

import com.vit.result.result.model.*;
import com.vit.result.result.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Field;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ResultController {

    @Autowired private StudentRepository studentRepo;
    @Autowired private MSERepository mseRepo;
    @Autowired private ESERepository eseRepo;

    @GetMapping("/results")
    public List<Map<String, Object>> getAllResults() {
        List<Map<String, Object>> results = new ArrayList<>();
        for (Student student : studentRepo.findAll()) {
            MSE mse = mseRepo.findById(student.getRollNo()).orElse(new MSE());
            ESE ese = eseRepo.findById(student.getRollNo()).orElse(new ESE());

            Map<String, Object> map = new HashMap<>();
            map.put("rollNo", student.getRollNo());
            map.put("name", student.getName());

            for (String subject : List.of("ds", "os", "cn", "dbms")) {
                int mseMarks = getMarks(mse, subject);
                int eseMarks = getMarks(ese, subject);
                double total = 0.3 * mseMarks + 0.7 * eseMarks;
                map.put(subject + "_total", total);
            }
            results.add(map);
        }
        return results;
    }

    private int getMarks(Object obj, String field) {
        try {
            Field f = obj.getClass().getDeclaredField(field);
            f.setAccessible(true);
            return f.getInt(obj);
        } catch (Exception e) {
            return 0;
        }
    }
}
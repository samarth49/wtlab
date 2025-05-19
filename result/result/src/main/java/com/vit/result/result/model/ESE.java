package com.vit.result.result.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class ESE {
    @Id
    private String rollNo;
    private int ds;
    private int os;
    private int cn;
    private int dbms;

    public String getRollNo() { return rollNo; }
    public void setRollNo(String rollNo) { this.rollNo = rollNo; }

    public int getDs() { return ds; }
    public void setDs(int ds) { this.ds = ds; }
    public int getOs() { return os; }
    public void setOs(int os) { this.os = os; }
    public int getCn() { return cn; }
    public void setCn(int cn) { this.cn = cn; }
    public int getDbms() { return dbms; }
    public void setDbms(int dbms) { this.dbms = dbms; }
}
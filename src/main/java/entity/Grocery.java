package main.java.entity;

import org.springframework.data.annotation.Id;

public class Grocery {
    @Id
    private String id;
    private String description;
    private String lastSold;
    private String shelfLife;
    private String department;
    private String price;
    private String unit;
    private String xFor;
    private String cost;

    public Grocery() {}

    public Grocery(String id, String description, String lastSold, String shelfLife, String department, String price, String unit, String xFor, String cost) {
        this.id = id;
        this.description = description;
        this.lastSold = lastSold;
        this.shelfLife = shelfLife;
        this.department = department;
        this.price = price;
        this.unit = unit;
        this.xFor = xFor;
        this.cost = cost;
    }

    @Override
    public String toString() {
        return "Grocery{" +
                "id='" + id + '\'' +
                ", description='" + description + '\'' +
                ", lastSold='" + lastSold + '\'' +
                ", shelfLife='" + shelfLife + '\'' +
                ", department='" + department + '\'' +
                ", price='" + price + '\'' +
                ", unit='" + unit + '\'' +
                ", xFor='" + xFor + '\'' +
                ", cost='" + cost + '\'' +
                '}';
    }

    public String getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public String getLastSold() {
        return lastSold;
    }

    public String getShelfLife() {
        return shelfLife;
    }

    public String getDepartment() {
        return department;
    }

    public String getPrice() {
        return price;
    }

    public String getUnit() {
        return unit;
    }

    public String getxFor() {
        return xFor;
    }

    public String getCost() {
        return cost;
    }
}
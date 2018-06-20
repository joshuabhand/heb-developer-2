package main.java;

import main.java.entity.Grocery;
import main.java.repository.GroceryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application// implements CommandLineRunner
{

//    @Autowired
//    private GroceryRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

//    @Override
//    public void run(String... args) throws Exception {
//
//        repository.deleteAll();
//
//        // save a couple of groceries
//        repository.save(new Grocery("753542", "banana", "9/5/2017", "4d", "Produce", "$2.99", "lb", "1", "$0.44"));
//        repository.save(new Grocery("321654", "apples", "9/6/2017", "7d", "Produce", "$1.49" , "lb", "1", "$0.20"));
//        repository.save(new Grocery("321655", "apples", "9/7/2017", "5d", "Produce", "$1.49" , "lb", "1", "$0.30"));
//
//        // fetch all customers
//        System.out.println();
//        System.out.println("Groceries found with findAll():");
//        System.out.println("-------------------------------");
//        for (Grocery grocery : repository.findAll()) {
//            System.out.println(grocery);
//        }
//        System.out.println();
//        System.out.println();
//
//        // fetch an individual customer
//        System.out.println("Groceries found with findByID('753542'):");
//        System.out.println("--------------------------------");
//        System.out.println(repository.findByid("753542"));
//        System.out.println();
//
//        System.out.println("Groceries found with findByDescription('apples'):");
//        System.out.println("--------------------------------");
//        for (Grocery grocery: repository.findByDescription("apples")) {
//            System.out.println(grocery);
//        }
//        System.out.println();
//    }

}
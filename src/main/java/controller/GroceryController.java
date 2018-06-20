package main.java.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class GroceryController {
    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }
}

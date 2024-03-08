package com.crishof.inventarioback.controller;

import com.crishof.inventarioback.model.Product;
import com.crishof.inventarioback.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("inventario-app")
@CrossOrigin(value = "http://localhost:4200")
public class ProductController {

    private static final Logger logger = LoggerFactory.getLogger(ProductController.class);

    @Autowired
    ProductService productService;

    @GetMapping("/findAll")
    public List<Product> findAll() {

        return productService.findAll();
    }

    @PostMapping("/save")
    public Product addProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

}

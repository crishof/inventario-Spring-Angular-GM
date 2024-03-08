package com.crishof.inventarioback.controller;

import com.crishof.inventarioback.exceptions.NotFoundExeption;
import com.crishof.inventarioback.model.Product;
import com.crishof.inventarioback.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/findById/{id}")
    public ResponseEntity<Product> findById(@PathVariable("id") int id) {
        Product product = productService.findById(id);
        if (product != null) {
            return ResponseEntity.ok(product);
        } else
            throw new NotFoundExeption("Product with id: " + id + " not found");
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Product> editProduct(@PathVariable("id") int id, @RequestBody Product productR) {

        Product product = productService.findById(id);
        product.setDescription(productR.getDescription());
        product.setPrice(productR.getPrice());
        product.setStock(productR.getStock());

        productService.saveProduct(product);
        return ResponseEntity.ok(product);
    }

}

package com.crishof.inventarioback.service;

import com.crishof.inventarioback.model.Product;

import java.util.List;

public interface ProductService {

    List<Product> findAll();

    Product findById(Integer id);

    void saveProduct(Product product);

    void deleteProductById(Integer id);

}

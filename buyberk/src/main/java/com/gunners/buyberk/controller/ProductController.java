package com.gunners.buyberk.controller;

import com.gunners.buyberk.exception.ResourceNotFoundException;
import com.gunners.buyberk.model.Product;
import com.gunners.buyberk.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ProductController {

    //injection
    @Autowired
    private ProductRepository productRepository;

    //get all products
    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    //create product rest api
    @PostMapping("/products")
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    //get product by id rest api
    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductByID(@PathVariable Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ürün Bulunamadı"));
        return ResponseEntity.ok(product);
    }

    //update product rest api
    @PutMapping("/products/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product productDet) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ürün Bulunamadı"));
        product.setProductCategory(productDet.getProductCategory());
        product.setProductDiscription(productDet.getProductDiscription());
        product.setProductName(productDet.getProductName());
        product.setProductPrice(productDet.getProductPrice());
        product.setProductImage(productDet.getProductImage());

        Product updatedProduct = productRepository.save(product);
        return ResponseEntity.ok(updatedProduct);

    }

    //delete product rest api
    @DeleteMapping("/products/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteProduct(@PathVariable Long id){
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ürün Bulunamadı"));
        productRepository.delete(product);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
